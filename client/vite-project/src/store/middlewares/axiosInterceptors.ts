import axios from "axios";
import { Action, Dispatch } from "@reduxjs/toolkit";
// import { getToken } from "../../features/users/services/localStorageService";

// const axiosInterceptors =
//   () => (next: Dispatch<Action>) => (action: Action) => {
//     const token = getToken();
//     axios.defaults.headers.common["Authorization"] = token;
//     // axios.interceptors.response.use((res) => {
//     //   if (res.status >= 400) return;
//     // });
//     return next(action);
//   };

// export default axiosInterceptors;
const axiosInterceptors =
  () => (next: Dispatch<Action>) => (action: Action) => {
    axios.interceptors.response.use(
      (res) => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    return next(action);
  };

export default axiosInterceptors;
