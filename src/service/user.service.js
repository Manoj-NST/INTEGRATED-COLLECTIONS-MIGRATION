import axios from "axios";


class UserService {
    getFoInfo(){
        return axios.get(`https://collections-api.mifix.io/api/v1/web/fo-info?foId=S0014`);
    }
}


export default new UserService();