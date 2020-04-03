import Vue from "vue";
import Vuex from "vuex";
import { TransactionsState } from "@/store/modules/TransactionModule";

Vue.use(Vuex);

export interface RootState {
  transactions: TransactionsState;
}

export default new Vuex.Store<RootState>({});
