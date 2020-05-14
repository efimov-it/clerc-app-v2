<template>
  <div id="app"
       tabindex="-1"
       @keyup="keyUp">
    <header class="header">
      <h1 class="header_title">
        <router-link to="/">Clerc</router-link>
      </h1>

      <nav class="header_nav"
           v-if="$store.getters.isUserLogined">
        <router-link class="header_nav-button icon icon_users"
                     type="button"
                     title="Пользователи"
                     v-if="$store.getters.getUserRole == 1"
                     to="/users/" />
        <button class="header_nav-button icon icon_logout"
                type="button"
                title="Выйти"
                @click="$store.commit('logout');$store.commit('clearBreadcrumbs');"></button>
      </nav>
    </header>

    <main class="app-container">
      <login v-if="!$store.getters.isUserLogined" />
      <breadcrumbs v-if="$store.getters.isUserLogined" />
      <router-view v-if="$store.getters.isUserLogined" />
    </main>

    <modal />
    <preloader />
    
  </div>
</template>

<script>
import login from './views/login';
import modal from './components/modal';
import preloader from './components/preloader';
import breadcrumbs from './components/breadcrumbs';
export default {
  components: {
    login,
    modal,
    preloader,
    breadcrumbs
  },
  created () {
    if ( this.$store.getters.isUserLogined ) {
      this.$store.dispatch('loadUserData');
    }
  },

  methods: {
    keyUp (e) {
      switch (e.key) {
        case 'Enter' :
          if(this.$store.getters.getModalShowState) {
            this.$store.commit('submitModal');
          }
        break;

        case 'Escape' :
          if(this.$store.getters.getModalShowState) {
            this.$store.commit('hideModal');
          }
        break;
      }
    }
  }
}
</script>