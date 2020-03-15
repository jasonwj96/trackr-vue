<template>
  <div id="home">
    <transaction-record
      v-for="transaction in transactions"
      v-bind:transaction="transaction"
      :key="transaction.id"
    ></transaction-record>
  </div>
</template>

<script lang="ts">
import TransactionRecord from "@/components/TransactionRecord.vue";

export default {
  name: "Home",
  components: {
    "transaction-record": TransactionRecord
  },
  data: () => {
    return {
      transactions: [
        {
          id: 1,
          type: "Entertainment",
          title: "NETFLIX.COM",
          date: "14/03/2019",
          amount: 12.99
        },
        {
          id: 2,
          type: "Misc",
          title: "AMAZON PRIME",
          date: "09/03/2019",
          amount: 14.99
        },
        {
          id: 3,
          type: "Music",
          title: "SPOTIFY",
          date: "14/03/2019",
          amount: 12.99
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#home {
  width: auto;
  height: auto;
}
</style>
