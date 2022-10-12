import axios from "axios";
import { environment } from "../environments/environment";
// import { getUser } from "./auth.service";
import helperService from "./helper.service";

class UserService {

    getFoInfo(){
        return axios.get(`${environment.apiUrl}/web/fo-info?foId=S0014`);
    }

    getDashboardMonthlyCollections() {
        return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&emiStatus=pending`);
        // return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&bmId=${getUser().userInfo.bmId}`);

    }

    getTeamTable() {
        return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=2022-09-09&fromDate=2022-09-09`)

        // return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=${helperService.getTodayYYYYMMDD()}&fromDate=${helperService.getTodayYYYYMMDD()}`)
    }



}


export default new UserService();