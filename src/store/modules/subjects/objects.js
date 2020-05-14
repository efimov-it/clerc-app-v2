export default {
    state: {
        data: []
    },
    actions: {
        loadObjects ({commit, getters}) {
            commit('showPreloader');
            global.request({
                url: '/api/objects',
                headers: {Authorization: getters.getAuthStr},
                resolve (data) {
                    if (getters.getUserRole == 0) {
                        commit('goPath', -1);
                        commit('addPath', {
                            newPath: {
                                path: '/',
                                title: 'Объекты'
                            }
                        });
                    }
                    else {
                        commit('addPath', {
                            newPath: {
                                path: '/deal/'+data.contract_id+'/object/'+data.id,
                                title: 'Объекты'
                            }
                        });
                    }
                    commit('saveObjects', data);
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
                            content: 'При загрузке объектов произошла ошибка.<br />Информация об ошибке была выведена в консоль.'
                        });
                        console.error(err);
                    }
                }
            });
        },
        loadObject ({commit, getters}, id) {
            commit('showPreloader');
            global.request({
                url: '/api/objects/'+id,
                headers: {Authorization: getters.getAuthStr},
                resolve (data) {                   
                    commit('saveObject', data);

                    if(getters.getUserRole == 0) {
                        commit('goPath', 0);
                    }
                    else {
                        commit('goPath', 1);
                        commit('addPath', {
                            newPath: {
                                path: '/deal/' + data.contract_id + '/objects/',
                                title: 'Объекты'
                            }
                        });
                    }
                    commit('addPath', {
                        newPath: {
                            path: getters.getUserRole == 0 ?
                                          '/object/' + id :
                                          '/deal/' + data.contract_id + '/objects/' + id,
                            title: data.name ? data.name : 'Безымянный объект'
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
                            content: 'При загрузке объекта произошла ошибка.<br />Информация об ошибке была выведена в консоль.'
                        });
                        console.error(err);
                    }
                }
            });
        }
    },
    mutations: {
        saveObjects (state, data) {
            state.data = data;
        },
        saveObject (state, data) {
            state.currentObject = data;
        }
    },
    getters: {
        getObjects (state) {
            return state.data;
        }
    }
}