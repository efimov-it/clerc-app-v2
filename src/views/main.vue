<template>
    <div class="container">
        <adminDashboard v-if="$store.getters.getUserRole == 1" />
        <watcherDashboard v-if="$store.getters.getUserRole == 0" />
    </div>
</template>

<script>
    import adminDashboard from './adminDashboard';
    import watcherDashboard from './watcherDashboard';

    export default {
        components: {
            adminDashboard,
            watcherDashboard
        }
    }
</script>