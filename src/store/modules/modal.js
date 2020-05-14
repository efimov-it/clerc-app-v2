export default {
    state: {
        isShow: false,
        isPreloaderShown: false,
        preloaderTimeStamp: null,
        header: 'Сообщение системы',
        content: 'Текстовое содержимое модального окна',
        submit () {}
    },
    getters: {
        getModalShowState (state) {
            return state.isShow;
        },
        getModalHeader (state) {
            return state.header;
        },
        getModalContent (state) {
            return state.content;
        },
        getPreloaderShowState (state) {
            return state.isPreloaderShown;
        }
    },
    mutations: {
        showModal (state, data) {
            state.header = data.header;
            state.content = data.content;
            state.submit = data.submit;
            state.isShow = true;
        },
        submitModal (state) {
            state.isShow = false;
            if(state.submit) {
                state.submit();
            }
        },
        hideModal (state) {
            state.isShow = false;
        },

        showPreloader (state) {
            state.isPreloaderShown = true;
            state.preloaderTimeStamp = (new Date()).getTime();
        },
        hidePreloader (state) {
            const shownTime = (new Date()).getTime() - state.preloaderTimeStamp;
            if(shownTime > 1000) {
                state.isPreloaderShown = false;
            }
            else {
                setTimeout(() => {
                    state.isPreloaderShown = false;
                }, 1000 - shownTime);
            }
        }
    }
}