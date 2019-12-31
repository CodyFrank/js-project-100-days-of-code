class DaysAdapter {

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/days"
    }

    async getDays() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    async createDay(value){
        
        const day = {
            date: value
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ day })
        }).then(res => res.json())
    }

    async updateDay(value, id){
                
        const day = {
            date: value
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ day })
        }).then(res => res.json())
    }

    async deleteDay(id){
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json())
    }

}