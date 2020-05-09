<template>
    <vueTable :data="$store.getters.getDeals" />
</template>

<script>
import vueTable from '@/components/table'
export default {
    components: {
        vueTable
    },
    created () {
        this.$store.dispatch('loadDeal');
    }
}
</script>