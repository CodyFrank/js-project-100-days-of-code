class Challenge{
    constructor(challengeJSON){
        this.id = challengeJSON.id
        this.dayId = challengeJSON.day_id
        this.question = challengeJSON.question
        this.description = challengeJSON.description
        this.solution = challengeJSON.solution
        this.rating = challengeJSON.rating
        this.convertRating()
    }

    convertRating(){
        if (this.rating === 1){
            return this.liked = "liked"
        }else{
            return this.liked = "dislike"
        }
    }

}