<template>
  <div class="welcome-title">
    <p>{{title}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String
  }
});
</script>

<style lang="scss" scoped>
.welcome-title {
  background-color: #000000;
  width: auto;
  padding: 40px;
  display: flex;
  justify-content: center;

  p {
    font-family: "Roboto";
    font-weight: 300;
    font-size: 1.5em;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
}
</style>