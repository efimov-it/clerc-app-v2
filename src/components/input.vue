<template>
    <label class="input"
           :title="tooltip">
        <p class="input_label">{{label}}</p>
        <input class="input_value"
               :type="type"
               :placeholder="placeholder"
               v-model="$attrs.value"
               @input="$emit('input', $event.target.value)" />
    </label>
</template>

<script>
export default {
    props: ['tooltip', 'label', 'placeholder', 'type']
}
</script>

<style lang="scss" scoped>
.input {
    display: block;

    &_label {
        font-size: 12px;
        font-family: RobotoBold;
        user-select: none;
    }

    &_value {
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #dcdce8;
        background-color: #ffffff;
        font-size: 10px;
        padding: 7px 0px;

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
        }

        &::placeholder {
            color: #dcdce8;
            transition: opacity .3s;
        }
    }
}
</style>