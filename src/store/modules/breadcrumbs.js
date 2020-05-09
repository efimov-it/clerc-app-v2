export default {
    state: {
        urls: []
    },
    mutations: {
        addPath (state, data) {
            state.urls.push({
                ...data
            });
        },
        goPath (state, index) {
            state.urls.splice(index + 1)
        },
        clearBreadcrumbs (state) {
            state.urls = [];
        }
    },
    getters: {
        getPathArray (state) {
            return state.urls;
        },
        getPathsCount (state) {
            return state.urls.length;
        },
        getCurrentPath (state) {
            return state.urls[state.urls.length - 1];
        }
    }
}