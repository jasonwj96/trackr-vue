import Axios from "@/http/Axios";
import Savings from "@/models/Savings";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import GenericTransaction from "@/models/GenericTransaction";

@Module({ namespaced: true, name: "TransactionStore" })
class TransactionStore extends VuexModule {
  private transactions: GenericTransaction[];
  private balance = 0;
  private savings: Savings;

  @Mutation
  public setTransactions(transactions: GenericTransaction[]) {
    this.transactions = transactions;
  }

  @Mutation
  public setBalance(balance: number): void {
    this.balance = balance;
  }

  @Action
  public async fetchAllTransactions() {
    const transactions = await Axios.fetchAllTransactions({
      scope: "A",
      quantity: 0
    });
    this.context.commit("setTransactions", transactions);
  }

  @Action
  public async fetchBalance() {
    const balance = await Axios.fetchBalance({ scope: "A", quantity: 0 });
    this.context.commit("setBalance", balance);
  }
}

export default TransactionStore;
