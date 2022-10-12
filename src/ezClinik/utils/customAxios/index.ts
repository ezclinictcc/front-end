import axios from "axios";
import store from "../../store/redux/store";
import { userLogOut } from "../../store/redux/user/userSlice";

const customAxios = axios.create();

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const failedReqStatus: number = error?.response?.status;
    const errorName: string = String(error?.response?.data?.errorDescription?.trim());
    sessionStorage.setItem("token_expired", 'true');
    if (failedReqStatus === 401 && errorName === 'token expired') {
      setTimeout(() => 
      store.dispatch(userLogOut()), 10);
    }

    return Promise.reject(error.response);
  }
);

export default customAxios;
