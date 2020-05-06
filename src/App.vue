<template>
  <div id="app">
    <header class="header">
      <h1 class="header_title">
        <router-link to="/">Clerc</router-link>
      </h1>

      <nav class="header_nav">
        <button class="header_nav-button icon_user"
                type="button"></button>
        <button class="header_nav-button icon_logOut"
                type="button"></button>
      </nav>
    </header>

    <main>
      <login />
    </main>
    
  </div>
</template>

<script>
import login from './views/login'
export default {
  components: {
    login
  }
}
</script>

<style lang="scss">

  @font-face {
    font-family: "Roboto";
    src: url(./assets/fonts/Roboto-Regular.ttf)
  }
  @font-face {
    font-family: "RobotoLight";
    src: url(./assets/fonts/Roboto-Light.ttf)
  }
  @font-face {
    font-family: "RobotoBold";
    src: url(./assets/fonts/Roboto-Bold.ttf)
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    color: #2e2e2e;
    font-family: Roboto;
    outline: none;
  }

  body {
    background-color: #f6f7fb;
  }

</style>
