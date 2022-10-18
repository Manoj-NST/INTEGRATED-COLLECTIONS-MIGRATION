import axios from "axios";
import { environment } from "../environments/environment";
// import { getUser } from "./auth.service";
import { getFO, getGroup } from "./auth.service";
// import helperService from "./helper.service";
class UserService {

    getFoInfo(){
        return axios.get(`${environment.apiUrl}/fieldofficer/fo-info?foId=${getFO().foId}`);
    }

    getDashboardMonthlyCollections() {
        // return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&emiStatus=pending`);
        // return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[0]}&toDate=${helperService.getFirstAndLastDateOfCurrentMonthYYYYMMDD()[1]}&bmId=${getUser().userInfo.bmId}`);
        return axios.get(`${environment.apiUrl}/collection/dashboard-monthly-collections?fromDate=2022-09-09&toDate=2022-09-09&emiStatus=pending`)
    }

    getTeamTable() {
        return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=2022-09-09&fromDate=2022-09-09`)
        // return axios.get(`${environment.apiUrl}/collection/fo-details?toDate=${helperService.getTodayYYYYMMDD()}&fromDate=${helperService.getTodayYYYYMMDD()}`)
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
        return axios.get(`${environment.apiUrl}/collection/dashboard-group-details?fromDate=2022-09-09&toDate=2022-09-09&foId=${getFO().foId}&page=1&limit=1000`)
    }

    getCollectCash() {
        return axios.get(`${environment.apiUrl}/collection/collect-cash?fromDate=2022-09-09&toDate=2022-09-09&foId=${getFO().foId}`)
    }

    getMemberDetails() {
        return axios.get(`${environment.apiUrl}/groups/getemidetailsbyid?groupId=${getGroup().groupId}`)
    }

    getTransactionDetails() {
        return axios.get(`${environment.apiUrl}/payments/gettransactions?groupId=${getGroup().groupId}&fromDate=2022-09-1&toDate=2022-09-1`)
    }

}


export default new UserService();