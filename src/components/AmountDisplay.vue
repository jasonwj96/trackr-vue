<template>
  <div class="amount-display">
    <p class="title">{{title}}</p>
    <p class="balance">${{balance}}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    balance: {
      type: Number,
      required: true,
      default: 0
    },
    title: {
      type: String,
      required: true,
      default: "N/A"
    }
  }
});
</script>
<style lang="scss" scoped>
.amount-display {
  display: flex;
  flex-flow: column;
  background-color: #000;
  flex-grow: 1;
  font-family: "Roboto", sans-serif;
  padding: 20px 0;

  p {
    color: #fff;
    margin: 5px 0;
  }

  .title {
    font-size: 1.1em;
  }

  .balance {
    font-size: 1.5em;
    font-weight: 300;
  }
}
</style>