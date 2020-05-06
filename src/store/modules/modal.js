export default {
    state: {
        isShow: false,
        header: 'Сообщение системы',
        content: 'Текстовое содержимое модального окна'
    },
    getters: {
        isModalShown (state) {
            return state.isShow
        }
    },
    mutations: {
        showModal (state, data) {
            state.isShow = true;
            data;
        },
        hideModal (state) {
            state.isShow = false;
        }
    }
}