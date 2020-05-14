export default {
    state: {
        data: null,
        currentDeal: null
    },
    actions: {
        loadDeals ({commit, getters}) {
            commit('showPreloader');
            commit('goPath', -1);
            commit('addPath', {
                newPath: {
                    path: '/',
                    title: 'Контракты'
                }
            });
            global.request({
                url: '/api/contracts',
                headers: {Authorization: getters.getAuthStr},
                resolve (data) {
                    commit('saveDeals', data);
                    commit('hidePreloader');
                },
                reject (err) {
                    commit('hidePreloader');
                    if (err.error) {
                        err.error.messages.forEach(message => commit('showModal', {
                            header: 'Ошибка',
                            content: 'При выполнении запроса произошла ошибка.<br />Текст ошибки: '+message
                        }));
                    }
                    else {
                        commit('showModal', {
                            header: 'Ошибка',
                            content: 'При загрузке контрактов произошла ошибка.<br />Информация об ошибке была выведена в консоль.'
                        });
                        console.error(err);
                    }
                }
            });
        },
        loadDeal ({commit, getters}, id) {
            commit('showPreloader');
            global.request({
                url: '/api/contracts/'+id,
                headers: {Authorization: getters.getAuthStr},
                resolve (data) {
                    commit('saveDeal', data);

                commit('goPath', 0);
                commit('addPath', {
                    newPath: {
                        path: '/deal/'+id,
                        title: data.number ? data.number : 'Номер не указан'
                    }
                });
                commit('hidePreloader');
                },
                reject (err) {
                    commit('hidePreloader');
                    if (err.error) {
                        err.error.messages.forEach(message => commit('showModal', {
                            header: 'Ошибка',
                            content: 'При выполнении запроса произошла ошибка.<br />Текст ошибки: '+message
                        }));
                    }
                    else {
                        commit('showModal', {
                            header: 'Ошибка',
                            content: 'При загрузке контракта произошла ошибка.<br />Информация об ошибке была выведена в консоль.'
                        });
                        console.error(err);
                    }
                }
            });
        }
    },
    mutations: {
        saveDeals (state, data) {
            state.data = data;
        },
        saveDeal (state, data) {
            state.currentDeal = data;
        }
    },
    getters: {
        getDeals (state) {
            return state.data;
        },
        getCurrentDeal (state) {
            return state.currentDeal;
        },
        getCurrentDealNumber (state) {
            return state.currentDeal.number;
        }
    }
}