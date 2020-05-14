export default {
    state: {
        urls: []
    },
    mutations: {
        addPath (state, data) {
            if (data.position != undefined) {
                state.urls.splice(data.position, 0, data.newPath);
            }
            else {
                state.urls.push({
                    ...data.newPath
                });
            }
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