<template>
    <div class="preloader_background fade"
         v-if="$store.getters.getPreloaderShowState">
        <div class="preloader">
            <span class="preloader_icon icon icon_preloader" />
            <p class="preloader_text">Подождите, идёт загрузка...</p>
        </div>
    </div>
</template>

<style lang="scss">
.preloader {
    width: 250px;
    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 5px;
    text-align: center;

    &_icon {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0px auto;
    }

    &_background {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;
        background-color: #00000099;
    }
}
</style>