<template>
  <div class="amount-display">
    <p class="title">{{title}}</p>
    <p class="balance">${{balance}}</p>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class AmountDisplay extends Vue {
  @Prop({ default: 0, required: true }) readonly balance: number;
  @Prop({ default: "N/A", required: true }) readonly title: string;
}
</script>
<style lang="scss" scoped>
.amount-display {
  display: flex;
  flex-flow: column;
  background-color: #000;
  flex-grow: 1;
  font-family: "Roboto", sans-serif;
  padding: 20px 0;

  p {
    color: #fff;
    margin: 5px 0;
  }

  .title {
    font-size: 1.1em;
  }

  .balance {
    font-size: 1.5em;
    font-weight: 300;
  }
}
</style>