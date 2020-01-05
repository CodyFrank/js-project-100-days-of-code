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


}