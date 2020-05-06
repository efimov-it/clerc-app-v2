<template>
    <div v-if="!$store.isModalShown">
        <div class="modal_background"></div>
        <div class="modal_wrapper">
            <div class="modal">
                <header class="modal_header">
                <h3>{{$store.user.token}}</h3>
                <button class="modal_close icon icon_close" />
                </header>
                <div class="modal_content">

                </div>
                <footer class="modal_footer">
                <button class="button">Хорошо</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.modal {
    max-width: 90vw;
    max-height: 90vh;
    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 5px;

    &_background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
        background-color: #00000099;
        z-index: 999;
    }
    &_wrapper {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>