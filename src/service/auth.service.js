import axios from "axios";
import { environment } from "../environments/environment";
import { setAuthToken } from "./auth.header";
// import UserService from "./user.service";
export const login = (bmId, password) => {
    return axios
        .post(`${environment.apiUrl}/branchManager/login`, {
            bmId,
            password
        }
    )
    .then((res) => {
        if(res.data.data.token) {
            window.localStorage.setItem("user",JSON.stringify(res.data.data));
            window.localStorage.setItem("token",res.data.data.token)
            const token = res.data.data.token;
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

export const getGroup = () => {
    const grpStr = localStorage.getItem('group');
    if (grpStr) return JSON.parse(grpStr);
    else return null;
}

export const getFO = () => {
    const foStr = localStorage.getItem('fo');
    if (foStr) return JSON.parse(foStr);
    else return null;
}

export const getToken = () => {
    // UserService.getFoInfo().then(
    //     res => {
    //         console.log(res.data[0]);
    //     }
    // )
    // UserService.getDashboardMonthlyCollections().then(
    //     response => {
    //         console.log(response);
    //     }
    // )
    return localStorage.getItem('token') || null;
  }



