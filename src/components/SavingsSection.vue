<template>
  <div class="savings-section">
    <amount-display title="This month" balance="167" />
    <amount-display title="Since last year" balance="1802" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AmountDisplayVue from "./AmountDisplay.vue";
export default Vue.extend({
  components: {
    "amount-display": AmountDisplayVue
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