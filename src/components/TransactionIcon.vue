<template>
  <div class="transaction-icon">
    <font-awesome-icon v-if="type == 'Entertainment'" class="icon entertainment" icon="tv" />
    <font-awesome-icon v-if="type == 'Music'" class="icon music" icon="music" />
    <font-awesome-icon v-if="type == 'Food'" class="icon food" icon="utensils" />
    <font-awesome-icon v-if="type == 'Income'" class="icon income" icon="dollar-sign" />
    <font-awesome-icon v-if="type == 'Shopping'" class="icon shopping" icon="shopping-basket" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
@import "@/themes/_dark_theme.scss";

.transaction-icon {
  align-self: center;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin: auto 5px;

  .icon {
    min-height: 20px;
    min-width: 20px;
    padding: 10px;
    border-radius: 50%;
    color: $transaction-icon-color;
  }
  .entertainment {
    background-color: $transaction-icon-entertainment;
  }
  .music {
    background-color: $transaction-icon-music;
  }
  .income {
    background-color: $transaction-icon-income;
  }
  .food {
    background-color: $transaction-icon-food;
  }
  .shopping {
    background-color: $transaction-icon-shopping;
  }
}
</style>