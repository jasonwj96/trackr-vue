<template>
  <div class="savings-section">
    <amount-display title="This month" :balance="savings.monthly" />
    <amount-display title="Since last year" :balance="savings.yearly" />
  </div>
</template>
<script lang="ts">
import AmountDisplay from "@/components/AmountDisplay.vue";
import Savings from "@/models/Savings";
import Axios from "@/http/Axios";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ components: { AmountDisplay } })
export default class Home extends Vue {
  @Prop({ default: new Savings() }) readonly savings: Savings;
}
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