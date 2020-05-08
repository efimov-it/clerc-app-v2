<template>
    <div v-if="$store.getters.getModalShowState">
        <div :class="'modal_background fade ' + (fadeOut ? ' fade_out' : '')"></div>
        <div :class="'modal_wrapper fade ' + (fadeOut ? ' fade_out' : '')">
            <div class="modal">
                <header class="modal_header">
                <h3 class="mb-15">{{$store.getters.getModalHeader}}</h3>
                <button class="modal_close icon icon_close"
                        @click="closeModal" />
                </header>
                <div class="modal_content mb-15">
                    {{$store.getters.getModalContent}}
                </div>
                <footer class="modal_footer">
                    <button class="button modal_submit"
                            @click="submitModal">Хорошо</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fadeOut: false
        }
    },
    methods: {
        closeModal () {
            this.fadeOut = true;
            setTimeout(() => {
                this.$store.commit('hideModal');
                this.fadeOut = false;
            }, 300);
        },
        submitModal () {
            this.fadeOut = true;
            setTimeout(() => {
                this.$store.commit('submitModal');
                this.fadeOut = false;
            }, 300);
        }
    }
}
</script>

<style lang="scss">
.modal {
    position: relative;
    max-width: 40vw;
    max-height: 50vh;
    background-color: #ffffff;
    padding: 20px 40px;
    border-radius: 5px;

    &_header {
        display: flex;
        user-select: none;
    }

    &_close {
        cursor: pointer;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    &_content {
        font-size: 12px;
        line-height: 1.1rem;
    }

    &_footer {
        display: flex;
        justify-content: right;
    }

    &_submit {
        padding-left: 40px;
        padding-right: 40px;
    }

    &_wrapper, &_background {
        animation: fadeIn .3s 1;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

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