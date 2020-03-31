<template>
  <div class="transaction-record">
    <div style="display:flex">
      <transaction-icon :type="transaction.type" />
      <div class="transaction-info">
        <p class="transaction-title">{{ transaction.title }}</p>
        <P class="transaction-desc">{{ transaction.date}} - {{ transaction.type }}</P>
      </div>
    </div>
    <div class="transaction-amount">
      <p>{{ transaction.amount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Transaction from "@/models/GenericTransaction";
import TransactionIconVue from "@/components/TransactionIcon.vue";
import GenericTransaction from "@/models/GenericTransaction";

export default Vue.extend({
  components: {
    "transaction-icon": TransactionIconVue
  },
  props: {
    transaction: {
      type: GenericTransaction,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/themes/_dark_theme.scss";

.transaction-record {
  display: flex;
  flex-flow: row;
  width: auto;
  height: 50px;
  justify-content: space-between;
  padding: 10px;
  background-color: $transaction-record-bg;
  border-radius: 10px;
  margin: 5px 0;

  &:hover {
    background-color: lighten($color: $transaction-record-bg, $amount: 5%);
  }

  .transaction-info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 5px;
    font-family: "Roboto";

    p {
      text-align: left;
    }

    .transaction-title {
      font-size: 1em;
      color: $transaction-title;
    }

    .transaction-desc {
      font-size: 0.9em;
      color: $transaction-desc;
    }
  }

  .transaction-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 0 5px;

    p {
      font-size: 0.9em;
      color: $transaction-amount;
    }
  }
}
</style>
