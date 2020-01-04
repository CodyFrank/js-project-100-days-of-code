class Challenge{
    constructor(challengeJSON){
        this.id = challengeJSON.id
        this.dayId = challengeJSON.day_id
        this.question = challengeJSON.question
        this.description = challengeJSON.description
        this.solution = challengeJSON.solution
        // console.log(`id: ${this.id},dayId: ${this.dayId},question: ${this.question},description: ${this.description},solution: ${this.solution}`)
    }
}