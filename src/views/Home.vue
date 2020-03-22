<template>
  <div id="home">
    <welcome-title title="Welcome, Jason" />
    <account-balance balance="946.89" />
    <page-section title="Savings" />
    <savings-section />
    <page-section title="Most recent transactions" />
    <transaction-record
      v-for="transaction in transactions"
      v-bind:transaction="transaction"
      :key="transaction.id"
    ></transaction-record>
    <page-section title="Active subscriptions (monthly)" />
    <transaction-record
      v-for="transaction in transactions"
      v-bind:transaction="transaction"
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

export default {
  name: "Home",
  components: {
    "transaction-record": TransactionRecord,
    "page-section": PageSection,
    "welcome-title": WelcomeTitle,
    "account-balance": AccountBalance,
    "savings-section": SavingsSectionVue
  },
  data: () => {
    const transactionList: Transaction[] = [];
    let tr: Transaction = new Transaction();

    tr.id = 1;
    tr.type = "Entertainment";
    tr.title = "NETFLIX.COM";
    tr.date = "14/03/2019";
    tr.amount = 12.99;

    transactionList.push(tr);
    tr = new Transaction();

    tr.id = 2;
    tr.type = "Misc";
    tr.title = "AMAZON PRIME";
    tr.date = "09/03/2019";
    tr.amount = 14.99;

    transactionList.push(tr);
    tr = new Transaction();

    tr.id = 3;
    tr.type = "Music";
    tr.title = "SPOTIFY";
    tr.date = "14/03/2019";
    tr.amount = 12.99;

    transactionList.push(tr);

    tr.id = 4;
    tr.type = "Music";
    tr.title = "SPOTIFY";
    tr.date = "14/03/2019";
    tr.amount = 20.99;

    transactionList.push(tr);

    return {
      transactions: transactionList
    };
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
