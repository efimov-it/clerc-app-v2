<template>
    <vueTable class="container"
              :data="$store.getters.getUsers" />
</template>

<script>
import vueTable from '@/components/table'
export default {
    components: {
        vueTable
    },
    created () {
        this.$store.dispatch('loadUsers');
    }
}
</script>