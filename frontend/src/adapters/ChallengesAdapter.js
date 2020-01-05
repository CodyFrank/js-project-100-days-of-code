class ChallengesAdapter {
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/challenges"
    }

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

    async deleteChallenge(id){
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json())
    }

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