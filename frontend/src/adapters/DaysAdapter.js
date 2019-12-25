class DaysAdapter {

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/days"
    }

    getDays() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createDay(value){
        const date = {
            body: value
        }

        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({date})
        }).then(res => res.json())
    }

}