<template>
    <vueTable :data="$store.getters.getObjects" link="/objects/" />
</template>

<script>
import vueTable from '@/components/table'
export default {
    components: {
        vueTable
    },
    created () {
        this.$store.dispatch('loadObjects');
    }
}
</script>