export default {
    state: {
        isShow: false,
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
        }
    }
}