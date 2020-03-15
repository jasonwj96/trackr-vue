<template>
  <div id="home">
    <transaction-record></transaction-record>
    <transaction-record></transaction-record>
    <transaction-record></transaction-record>
    <transaction-record></transaction-record>
  </div>
</template>

<script lang="ts">
import TransactionRecord from "@/components/TransactionRecord.vue";

export default {
  name: "Home",
  components: {
    "transaction-record": TransactionRecord
  }
};
</script>

<style lang="scss">
#home {
  width: auto;
  height: auto;
}
</style>
