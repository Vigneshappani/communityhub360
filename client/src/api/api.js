import axios from "axios"

import {BASE_URL} from "../constants"

const api = axios.create({
    baseURL : BASE_URL,
});

// To intercept the auth token
// api.interceptors.request.use(
//     (config) => {
//         const auth = localStorage.getItem("auth-token");  
//         if(auth != null){
//             config.headers["auth-token"] = auth
//         }
//         return config;
//     },
//     (err) => {
//         console.log(err)
//         return Promise.reject(err)
//     }
// );
export default api;