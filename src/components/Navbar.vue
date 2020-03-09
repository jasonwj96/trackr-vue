<template>
  <div id="nav">
    <div class="nav-btn">
      <font-awesome-icon class="nav-btn-icon" icon="home"></font-awesome-icon>
      <p class="nav-btn-text">Home</p>
    </div>

    <div class="nav-btn">
      <font-awesome-icon class="nav-btn-icon" icon="list-ul"></font-awesome-icon>
      <p class="nav-btn-text">Transactions</p>
    </div>

    <div class="nav-btn">
      <font-awesome-icon class="nav-btn-icon" icon="chart-line"></font-awesome-icon>
      <p class="nav-btn-text">Analytics</p>
    </div>

    <div class="nav-btn">
      <font-awesome-icon class="nav-btn-icon" icon="cog"></font-awesome-icon>
      <p class="nav-btn-text">Settings</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {}
});
</script>

<style lang="scss" scoped>
@import "../themes/_dark_theme.scss";

#nav {
  display: flex;
  height: auto;
  width: 100%;
  background-color: $nav-btn-bg;
  position: fixed;
  bottom: 0;
  left: 0;
}

.nav-btn {
  height: 50px;
  width: 60px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: $nav-btn-bg;
  flex-grow: 1;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  &:hover {
    background-color: darken($color: $nav-btn-bg, $amount: 20);
  }
}

.nav-btn-icon {
  color: $nav-btn-icon-bg;
  font-size: 20px;
  margin: 5px;
}

.nav-btn-text {
  color: $nav-btn-text;
  margin: 5px;
  font-size: 0.9em;
}
</style>