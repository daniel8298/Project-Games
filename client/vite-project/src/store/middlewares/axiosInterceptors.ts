import axios from "axios";
import { Action, Dispatch } from "@reduxjs/toolkit";
import { getToken } from "../../features/users/services/localStorageService";

const axiosInterceptors =
  () => (next: Dispatch<Action>) => (action: Action) => {
    const token = getToken();
    axios.defaults.headers.common["Authorization"] = token;

    return next(action);
  };

export default axiosInterceptors;
