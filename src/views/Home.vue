<template>
  <div id="home">
    <welcome-title title="Welcome, Jason" />
    <account-balance :balance="balance" />
    <page-section title="Savings" />
    <savings-section />
    <page-section title="Most recent transactions" />
    <transaction-record
      v-for="transaction in transactions"
      :transaction="transaction"
      :key="transaction.id"
    ></transaction-record>
    <page-section title="Active subscriptions (monthly)" />
    <transaction-record
      v-for="transaction in transactions"
      :transaction="transaction"
      :key="transaction.id"
    ></transaction-record>
  </div>
</template>

<script lang="ts">
import TransactionRecord from "@/components/TransactionRecord.vue";
import PageSection from "@/components/PageSection.vue";
import Transaction from "@/models/Transaction";
import WelcomeTitle from "@/components/WelcomeTitle.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import SavingsSectionVue from "../components/SavingsSection.vue";
import axios, { AxiosResponse } from "axios";
// import { Endpoints } from "Endpoints";

export default {
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
      transactions: [] as Transaction[],
      balance: 0 as number
    };
  },
  mounted() {
    axios
      .get(`https://localhost:44366/api/trx/all`)
      .then((response: AxiosResponse) => (this.transactions = response.data));

    const request = {
      scope: "M",
      quantity: 1
    };

    axios
      .post(`https://localhost:44366/api/trx/balance`, request)
      .then((response: AxiosResponse) => (this.balance = response.data));
  }
};
</script>

<style lang="scss">
#home {
  width: auto;
  height: auto;
  padding: 0 10px 70px 10px;
}
</style>
