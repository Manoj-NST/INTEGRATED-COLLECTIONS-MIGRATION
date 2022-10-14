import axios from "axios";
import { environment } from "../environments/environment";

class UserService {

    getDashboardMonthlyCollections() {
        // return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&emiStatus=pending`);
        // return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&bmId=${getUser().userInfo.bmId}`);
        return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=2022-09-09&toDate=2022-09-09&emiStatus=pending`)
    }

    getTeamTable() {
        return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=2022-09-09&fromDate=2022-09-09`)
        // return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=${helperService.getTodayYYYYMMDD()}&fromDate=${helperService.getTodayYYYYMMDD()}`)
    }

    getFoInfo(){
        return axios.get(`${environment.apiUrl}/fieldofficer/fo-info?foId=${localStorage.getItem("foId")}`);
    }

    getDashboardDailyCollections(){
        return axios.get(`${environment.apiUrl}/collection/dashboard-daily-collection?fromDate=2022-09-09&toDate=2022-09-09`)
        // return axios.get(`${environment.apiUrl}/collection/dashboard-daily-collection?fromDate=${helperService.getTodayYYYYMMDD()}&toDate=${helperService.getTodayYYYYMMDD()}`)
    }

    getGivenAtBranch(){
        return axios.get(`${environment.apiUrl}/fieldofficer/givenatbranch?fromDate=2022-09-29&toDate=2022-09-29`)
        // return axios.get(`${environment.apiUrl}/fieldofficer/givenatbranch?fromDate=${helperService.getTodayYYYYMMDD()}&toDate=${helperService.getTodayYYYYMMDD()}`)
    }

    getDashboardGroupDetails() {
        return axios.get(`${environment.apiUrl}/collection/dashboard-group-details?fromDate=2022-09-09&toDate=2022-09-09&foId=${localStorage.getItem("foId")}&page=1&limit=1000`)
    }

    getCollectCash() {
        return axios.get(`${environment.apiUrl}/collection/collect-cash?fromDate=2022-09-09&toDate=2022-09-09&foId=${localStorage.getItem("foId")}`)
    }

    getTransactionDetails () {
        return axios.get(`${environment.apiUrl}/payments/gettransactions?groupId=${localStorage.getItem("groupId")}&fromDate=2022-09-10&toDate=2022-09-10`)
    }

}


export default new UserService();