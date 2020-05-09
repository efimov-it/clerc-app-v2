export default {
    state: {
        authStr: localStorage.getItem('access_token') && localStorage.getItem('token_type') ? localStorage.getItem('token_type')+' '+localStorage.getItem('access_token') : null,
        role: null
    },
    actions: {
        login ({commit, dispatch}, data) {
            global.request({
                url: '/oauth/token',
                method: 'post',
                data: {
                    username: data.mail,
                    password: data.password,
                    client_id: 1,
                    client_secret: 'c75IGwuqkjrO1RWCE4Ntn4zqpQdpgnEO2wGT9iMT',
                    grant_type: 'password'
                },
                headers: {},
                resolve (resp) {
                    localStorage.setItem('access_token', resp.access_token);
                    localStorage.setItem('expires_in', resp.expires_in);
                    localStorage.setItem('refresh_token', resp.refresh_token);
                    localStorage.setItem('token_type', resp.token_type);
                    
                    commit('setUserLogin', {
                        token_type: resp.token_type,
                        access_token: resp.access_token
                    });

                    dispatch('loadUserData');
                },
                reject (err) {
                    if(err.error == 'invalid_credentials') {
                        commit('showModal', {
                            header: 'Авторизация',
                            content: 'E-mail или пароль были указаны не верно. Пожалуйста, проверьте правильность заполнения и повторите попытку.'
                        });
                    }
                    else {
                        console.warn(err.error);
                        commit('showModal', {
                            header: 'Авторизация',
                            content: 'При отправке запроса произошла ошибка.'
                        });
                    }
                }
            })
        },
        loadUserData ({commit, state}) {
            global.request({
                url: '/api/profile',
                headers: {Authorization: state.authStr},
                resolve (resp) {
                    commit('addPath', {
                        path: '/',
                        title: resp.role == 1 ? 'Контракты' : 'Объекты'
                    });
                    commit('setUserRole', resp.role);
                },
                reject (err) {
                    console.warn(err.error);
                    commit('logout');
                    commit('showModal', {
                        header: 'Авторизация',
                        content: 'При отправке запроса произошла ошибка.'
                    });
                }
            });
        }
    },
    mutations: {
        setUserLogin (state, data) {
            state.authStr = data.token_type + ' ' + data.access_token;
        },
        setUserRole (state, role) {
            state.role = role;
        },
        logout (state) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('token_type');

            state.authStr = null;
            state.role = null;
        }
    },
    getters: {
        isUserLogined (state) {
            return state.authStr != null;
        },
        getAuthStr (state) {
            return state.authStr;
        },
        getUserRole (state) {
            return state.role;
        }
    }
}