<template>
    <div class="container">Просмотр объектов</div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('loadObject', this.$route.params.id);
    }
}
</script>