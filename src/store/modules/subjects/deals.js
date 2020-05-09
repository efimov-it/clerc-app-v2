export default {
    state: {
        data: {}
    },
    actions: {
        loadDeal ({commit, getters}) {
            global.request({
                url: '/api/contracts',
                headers: {Authorization: getters.getAuthStr},
                resolve (data) {
                    commit('saveDeals', data);
                },
                reject (err) {
                    console.log(err);
                }
            });
        }
    },
    mutations: {
        saveDeals (state, data) {
            state.data = data;
        }
    },
    getters: {
        getDeals (state) {
            return state.data;
        }
    }
}