<template>
    <div class="login-form_wrapper">
        <form class="login-form">
            <h2 class="login-form_app-title">Clerc</h2>
            <p>Авторизация</p>
            <Input v-model="abc" label="Логин:" placeholder="exemple@mail.com" type="text" />
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
            abc: 123
        }
    }
}
</script>