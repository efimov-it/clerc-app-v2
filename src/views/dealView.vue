<template>
    <div class="container">Просмотр контрактов</div>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('loadDeal', this.$route.params.id);
    }
}
</script>