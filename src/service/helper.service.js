class helperService {
    
    getTodayYYYYMMDD(){
        let d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        return year + "-" + (month > 10 ? month : "0" + month) + "-" + (date > 10 ? date : "0" + date);
    }

    getCurrentMonth(){
        let d = new Date();
        let months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[d.getMonth()];
    }

    getSpeceficMonth(date){
        let d = date;
        const num = Number(d.slice(5,7));
        let months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return months[num-1];
    }

    getSpeceficDate(date) {
        let d = date;
        const num = Number(d.slice(8,10));
        return num;
    }

    getSpeceficYear(date) {
        let d = date;
        const num = Number(d.slice(0,4));
        return num;
    }

    getFirstAndLastDateOfCurrentMonthYYYYMMDD(){
        var date = new Date();
        var d = new Date(date.getFullYear(), date.getMonth(), 1);
        var ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        
        return [
            // eslint-disable-next-line no-useless-concat
            d.getFullYear() + "-" + ((d.getMonth() + 1) > 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)) + "-" + "01",
            ld.getFullYear() + "-" + ((ld.getMonth() + 1) > 10 ? (ld.getMonth() + 1) : "0" + (ld.getMonth() + 1)) + "-" + ld.getDate(),
        ];
    }

    
}

export default new helperService();