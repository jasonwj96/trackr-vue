<template>
  <div class="page-section">
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
.page-section {
  width: auto;
  padding: 10px 20px;
  display: flex;

  p {
    font-family: "Roboto";
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
}
</style>