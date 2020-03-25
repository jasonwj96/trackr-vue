<template>
  <div class="account-balance">
    <p class="title">Your balance</p>
    <p class="balance">${{balance}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    balance: String
  }
});
</script>

<style lang="scss" scoped>
.account-balance {
  background-color: #000000;
  width: auto;
  padding: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5px;
  border-radius: 0 0 10px 10px;

  p {
    font-family: "Roboto";
    font-size: 2em;
    color: #ffffff;
    margin: 0;
    padding: 0;
  }

  .title {
    padding: 5px;
    color: #a0a0a0;
    font-size: 1.2em;
  }

  .balance {
    padding: 10px;
    font-weight: 100;
    font-size: 4em;
  }
}
</style>