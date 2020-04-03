<template>
  <div id="home">
    <welcome-title title="Welcome, Jason" />
    <account-balance :balance="balance" />
    <page-section title="Savings" />
    <savings-section :savings="savings" />
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
import Savings from "../models/Savings";
import { TransactionModule } from "@/store/modules/TransactionModule";
import { getModule } from "vuex-module-decorators";

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
  get transactions(): GenericTransaction[] {
    TransactionModule.fetchAllTransactions();
    return TransactionModule.transactions;
  }

  get balance(): number {
    TransactionModule.fetchBalance();
    return TransactionModule.balance;
  }

  get savings(): Savings {
    TransactionModule.fetchSavings();
    return TransactionModule.savings;
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
