<template>
  <div id="app">
    <router-view />
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "themes/_dark_theme.scss";

html,
body {
  padding: 0px;
  margin: 0px;
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background-color: $main-bg;
  font-family: "Roboto", sans-serif;
}

p {
  margin: 0;
  padding: 0;
}

#app {
  min-width: 100%;
  min-height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
