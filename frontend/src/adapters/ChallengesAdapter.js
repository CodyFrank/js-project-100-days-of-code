class ChallengesAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/challenges"
    }
// updates solution sends patch request to /challenges/id "gets handled in backend as update action" 
    async updateChallengeSolution(value, id){
        const challenge = {
            solution: value
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ challenge })
        }).then(res => res.json())
    }
// updates description sends patch request to /challenges/id "gets handled in backend as update action"
    async updateChallengeDescription(value, id){
        const challenge = {
            description: value
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ challenge })
        }).then(res => res.json())
    }
//  updates question sends patch request to /challenges/id "gets handled in backend as update action"
    async updateChallengeQuestion(value, id){
        const challenge = {
            question: value
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ challenge })
        }).then(res => res.json())
    }
// sends delete request to /challenges/id "gets handled in backend as delete action"
    async deleteChallenge(id){
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json())
    }
    
// sends post request to /days "gets handled in backend as create action"
    async createChallenge(dayId){
        const challenge = {
            day_id: `${dayId}`,
            question: "Write your challenge question here!",
            description: "Write a desctiption or post on the challenge and your solviong process here!",
            solution: "write the code solution to the challenge here!"
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ challenge })
        }).then(res => res.json())

    }


}