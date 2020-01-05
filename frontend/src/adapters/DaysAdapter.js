// talks to backend "days"
class DaysAdapter {

    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/days"
    }
// sends get request to /days "gets handled in backend as index action"
    async getDays() {
        return fetch(this.baseUrl).then(res => res.json())
    }
// sends post request to /days "gets handled in backend as create action"
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
// sends patch request to /days/id "gets handled in backend as days update action"
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
// sends delete request to /days/id "gets handled in backend as delete action"
    async deleteDay(id){
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json())
    }

}