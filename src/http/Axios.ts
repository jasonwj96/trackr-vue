import axios, { AxiosResponse } from "axios";
import { Endpoints } from "./Endpoints";

const Axios = {
  fetchAllTransactions: async (request: object) => {
    return await axios
      .post(`${Endpoints.trackrAPI}/trx`, request)
      .then((response: AxiosResponse) => response.data);
  },

  fetchBalance: async (request: object) => {
    return await axios
      .post(`${Endpoints.trackrAPI}/balance`, request)
      .then((response: AxiosResponse) => response.data);
  }
};

export default Axios;
