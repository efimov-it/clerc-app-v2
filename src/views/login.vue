<template>
    <div class="login-form_wrapper">
        <form class="login-form"
              @submit.prevent="login">
            <h2 class="login-form_app-title mb-15">Clerc</h2>
            <p class="mb-15">Авторизация</p>
            <div class="mh-60">
                <Input class="mb-15"
                       v-model="mail"
                       label="E-mail"
                       placeholder="exemple@mail.com"
                       type="text" />
                <Input class="mb-30"
                       v-model="password"
                       label="Пароль"
                       placeholder="Введите Ваш пароль"
                       type="password" />
                <button type="submit"
                        class="login-form_submit button">Войти в систему</button>
            </div>
        </form>
    </div>
</template>

<script>
import Input from '@/components/input';
export default {
    components: {
        Input
    },
    data () {
        return {
            mail: '',
            password: ''
        }
    },
    methods: {
        login () {
            alert(this.mail + ' ' + this.password)
        }
    }
}
</script>

<style lang="scss" >
.login-form {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 16px #e7e7f0;
    padding: 15px 20px 30px 20px;
    max-width: 350px;
    width: 100%;

    &_app-title {
        color: #5361ff;
        user-select: none;
        text-transform: uppercase;
        font-size: 20px;
    }

    & > p {
        font-size: 24px;
        text-align: center;
        font-family: RobotoBold;
    }

    &_submit {
        width: 100%;
    }

    &_wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>