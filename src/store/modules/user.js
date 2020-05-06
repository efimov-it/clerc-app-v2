export default {
    state: {
        token: null
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        isUserLogined (state) {
            return state.token != null;
        }
    }
}