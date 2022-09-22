import axios from "axios";
import { environment } from "../environments/environment";
import { setAuthToken } from "./auth.header";
import UserService from "./user.service";

export const login = (email, password) => {
    return axios
        .post(`${environment.apiUrl}/branchManager/login`, {
            email,
            password
        }
    )
    .then((res) => {
        if(res.data.token) {
            window.localStorage.setItem("user",JSON.stringify(res.data));
            window.localStorage.setItem("token",res.data.token)
            const token = res.data.token;
            setAuthToken(token);
        }
        return res.data;
    })
    .catch(err => console.log(err));
};

export const logout = () => {
    window.localStorage.clear();
};

export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    UserService.getFoInfo().then(
        res => {
            console.log(res.data[0]);
        }
    )

    return localStorage.getItem('token') || null;
  }



