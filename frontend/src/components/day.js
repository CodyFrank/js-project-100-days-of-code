class Day{
    constructor(dayJSON){
        this.id = dayJSON.id
        this.date = dayJSON.date
        this.challenges = []
        dayJSON.challenges.forEach(c => this.challenges.push(new Challenge(c)))
    }
// render html for each days challenge
    renderChallenge(){
        return this.challenges.map(c => {
            return `<li data-id='${c.id}'>
            <p data-id='${c.id}' class="challenge question">${c.question}</p>
            <p data-id='${c.id}' class="challenge description">${c.description}</p>
            <p data-id='${c.id}' class="challenge solution">${c.solution}</p></li>
            <p data-id='${c.id}' class="challenge rating">how difficult was this challenge? ${c.liked}</p>
            <button data-dayId='${c.dayId}' class='challenge-delete-button' data-id=${c.id}>Delete Challenge</button>`
        })
    }
// renders html for a day
    renderDay(){
        return `<button class="collapsible day-button" data-id='${this.id}' id='dateid${this.id}'>${this.date}</button>
        <div class="challenges challenge">
        <button data-id='${this.id}' class='new-challenge-button'>New Challenge</button>
        <button class='day-delete-button' data-id=${this.id}>Delete Day</button>
        <ol class="challenge">${this.renderChallenge().join("")}</ol>
        </div>`
    }
}



