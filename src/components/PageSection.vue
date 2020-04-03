<template>
  <div class="page-section">
    <p>{{title}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class PageSection extends Vue {
  @Prop({ default: "N/A", required: true }) readonly title: string;
}
</script>

<style lang="scss" scoped>
.page-section {
  width: auto;
  padding: 10px 20px;
  display: flex;

  p {
    font-family: "Roboto";
    color: #ffffff;
    margin: 0;
    padding: 0;
  }
}
</style>