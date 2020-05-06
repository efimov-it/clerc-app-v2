<template>
  <div id="app">
    <header class="header">
      <h1 class="header_title">
        <router-link to="/">Clerc</router-link>
      </h1>

      <nav class="header_nav"
           v-if="$store.getters.isUserLogined">
        <button class="header_nav-button icon icon_users"
                type="button"
                title="Пользователи"></button>
        <button class="header_nav-button icon icon_logout"
                type="button"
                title="Выйти"></button>
      </nav>
    </header>

    <main class="app-container">
      <login v-if="!$store.getters.isUserLogined" />
    </main>

    <modal />
    
  </div>
</template>

<script>
import login from './views/login';
import modal from './components/modal';
export default {
  components: {
    login,
    modal
  }
}
</script>