<template>
  <div class="transaction-record">
    <div style="display:flex">
      <div class="transaction-icon">
        <fontawesome-icon class="icon" icon="television"></fontawesome-icon>
      </div>
      <div class="transaction-info">
        <p class="transaction-title">NETFLIX.COM</p>
        <P class="transaction-desc">14/03/2019 - Entertainment</P>
      </div>
    </div>
    <div class="transaction-amount">
      <p>$12.99</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang='scss' scoped>
@import "@/themes/_dark_theme.scss";

.transaction-record {
  display: flex;
  flex-flow: row;
  width: auto;
  height: 50px;
  color: #fff;
  justify-content: space-between;
  padding: 10px;

  .transaction-icon {
    height: 40px;
    width: 40px;
    background-color: $transaction-icon-entertainment;
    border-radius: 50%;
    margin: 5px;
    align-self: flex-start;

    .icon {
      font-size: 100%;
      color: $transaction-icon-color;
    }
  }

  .transaction-info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 5px;

    p {
      text-align: left;
    }

    .transaction-title {
      font-size: 0.9em;
      color: $transaction-title;
    }

    .transaction-desc {
      font-size: 0.7em;
      color: $transaction-desc;
    }
  }

  .transaction-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 5px;

    p {
      font-size: 0.9em;
      font-weight: 100;
      color: $transaction-amount;
    }
  }
}
</style>