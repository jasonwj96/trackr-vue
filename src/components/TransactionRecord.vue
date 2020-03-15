<template>
  <div class="transaction-record">
    <div style="display:flex">
      <div class="transaction-icon">
        <font-awesome-icon class="icon" icon="tv"></font-awesome-icon>
      </div>
      <!-- <div class="transaction-icon-ph" /> -->
      <div class="transaction-info">
        <p class="transaction-title">{{transaction.title}}</p>
        <P class="transaction-desc">{{transaction.date}} - {{transaction.type}}</P>
      </div>
    </div>
    <div class="transaction-amount">
      <p>{{transaction.amount}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Transaction from "@/models/Transaction";

export default Vue.extend({
  props: {
    transaction: Transaction
  }
});
</script>

<style lang='scss' scoped>
@import "@/themes/_dark_theme.scss";

.transaction-record {
  display: flex;
  flex-flow: row;
  width: auto;
  height: 50px;
  justify-content: space-between;
  padding: 10px;
  background-color: $transaction-record-bg;

  &:hover {
    background-color: lighten($color: $transaction-record-bg, $amount: 5%);
  }

  .transaction-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background-color: $transaction-icon-entertainment;
    border-radius: 50%;
    margin: 5px;
    align-self: flex-start;

    .icon {
      font-size: 1em;
      color: $transaction-icon-color;
    }
  }

  // .transaction-icon-ph {
  //   background-color: lighten(
  //     $color: $transaction-icon-entertainment,
  //     $amount: 20%
  //   );
  // }

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
      font-weight: 300;
      color: $transaction-amount;
    }
  }
}
</style>