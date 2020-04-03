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
    <page-section title="Taxes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TransactionRecord from "@/components/TransactionRecord.vue";
import PageSection from "@/components/PageSection.vue";
import GenericTransaction from "@/models/GenericTransaction";
import WelcomeTitle from "@/components/WelcomeTitle.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import SavingsSection from "@/components/SavingsSection.vue";
import { namespace } from "vuex-class";
const transactions = namespace("TransactionStore");

@Component({
  components: {
    TransactionRecord,
    PageSection,
    WelcomeTitle,
    AccountBalance,
    SavingsSection
  }
})
export default class Home extends Vue {
  @transactions.State
  private transactions!: GenericTransaction[];

  @transactions.State
  private balance!: number;

  @transactions.Action
  private fetchAllTransactions!: () => void;

  @transactions.Action
  private fetchBalance!: () => void;

  mounted() {
    this.fetchAllTransactions();
    this.fetchBalance();
  }
}
</script>

<style lang="scss">
#home {
  width: auto;
  height: auto;
  padding: 0 10px 70px 10px;
}
</style>
