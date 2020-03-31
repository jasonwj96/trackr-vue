<template>
  <div id="home">
    <welcome-title title="Welcome, Jason" />
    <account-balance :balance="balance" />
    <page-section title="Savings" />
    <savings-section />
    <page-section title="Most recent transactions" />
    <transaction-record
      v-for="transaction  in transactions"
      :transaction="transaction"
      :key="transaction.id"
    ></transaction-record>
    <page-section title="Active subscriptions (monthly)" />
    <page-section title="Taxes" />
  </div>
</template>

<script lang="ts">
import TransactionRecord from "@/components/TransactionRecord.vue";
import PageSection from "@/components/PageSection.vue";
import GenericTransaction from "@/models/GenericTransaction";
import Savings from "@/models/Savings";
import WelcomeTitle from "@/components/WelcomeTitle.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import SavingsSectionVue from "@/components/SavingsSection.vue";
import Vue from "vue";
import Axios from "@/http/Axios";

export default Vue.extend({
  name: "Home",
  components: {
    "transaction-record": TransactionRecord,
    "page-section": PageSection,
    "welcome-title": WelcomeTitle,
    "account-balance": AccountBalance,
    "savings-section": SavingsSectionVue
  },
  data() {
    return {
      transactions: [] as GenericTransaction[],
      balance: 0 as number
    };
  },
  async mounted() {
    const request = { scope: "A", quantity: 0 };
    this.transactions = await Axios.fetchAllTransactions(request);
    this.balance = await Axios.fetchBalance(request);
  }
});
</script>

<style lang="scss">
#home {
  width: auto;
  height: auto;
  padding: 0 10px 70px 10px;
}
</style>
