import Vue from "vue";
import Vuex from "vuex";
import TransactionStore from "@/store/TransactionStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TransactionStore
  }
});
