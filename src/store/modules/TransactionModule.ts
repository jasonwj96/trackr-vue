import Axios from "@/http/Axios";
import Savings from "@/models/Savings";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import GenericTransaction from "@/models/GenericTransaction";
import store from "@/store";

export interface TransactionsState {
  transactions: GenericTransaction[];
  balance: number;
  savings: Savings;
}

@Module({ dynamic: true, store, name: "transactions" })
class TransactionStore extends VuexModule implements TransactionsState {
  public transactions = [] as GenericTransaction[];
  public balance = 0;
  public savings = new Savings();

  @Mutation
  public SET_TRANSACTIONS(transactions: GenericTransaction[]): void {
    this.transactions = transactions;
  }

  @Mutation
  private SET_BALANCE(balance: number) {
    this.balance = balance;
  }

  @Mutation
  private SET_SAVINGS(savings: Savings) {
    this.savings = savings;
  }

  @Action
  public async fetchAllTransactions() {
    this.SET_TRANSACTIONS(
      await Axios.fetchAllTransactions({ scope: "A", quantity: 0 })
    );
  }

  @Action
  public async fetchBalance() {
    this.SET_BALANCE(await Axios.fetchBalance({ scope: "A", quantity: 0 }));
  }

  @Action
  public async fetchSavings() {
    const savings = new Savings();
    savings.monthly = await Axios.fetchBalance({ scope: "M", quantity: 1 });
    savings.yearly = await Axios.fetchBalance({ scope: "Y", quantity: 1 });
    this.SET_SAVINGS(savings);
  }
}

export const TransactionModule = getModule(TransactionStore);
