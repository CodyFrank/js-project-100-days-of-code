class Challenge{
    constructor(challengeJSON){
        this.id = challengeJSON.id
        this.dayId = challengeJSON.day_id
        this.question = challengeJSON.question
        this.description = challengeJSON.description
        this.solution = challengeJSON.solution
        this.rating = challengeJSON.rating
    }



}