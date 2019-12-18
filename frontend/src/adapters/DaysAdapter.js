class DaysAdapter {

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/days"
    }

    getDays() {
        return fetch(this.baseUrl).then(res => res.json())
    }

}