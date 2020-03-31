<template>
  <div class="savings-section">
    <amount-display title="This month" :balance="savings.monthly" />
    <amount-display title="Since last year" :balance="savings.yearly" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AmountDisplayVue from "@/components/AmountDisplay.vue";
import Savings from "@/models/Savings";
import Axios from "@/http/Axios";

export default Vue.extend({
  components: {
    "amount-display": AmountDisplayVue
  },
  data() {
    return {
      savings: new Savings()
    };
  },
  async mounted() {
    const savings: Savings = new Savings();

    let request = { scope: "M", quantity: 1 };
    savings.monthly = await Axios.fetchBalance(request);

    request = { scope: "Y", quantity: 1 };
    savings.yearly = await Axios.fetchBalance(request);

    this.savings = savings;
  }
});
</script>
<style lang="scss" scoped>
.savings-section {
  display: flex;
  width: auto;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
}
</style>