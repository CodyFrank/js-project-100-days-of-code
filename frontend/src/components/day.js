class Day{
    constructor(dayJSON){
        this.id = dayJSON.id
        this.date = dayJSON.date
        this.challenges = []
        dayJSON.challenges.forEach(c => this.challenges.push(new Challenge(c)))
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.daysContainer = document.querySelector('div.days-container')
    }

    renderChallenge(){
        return this.challenges.map(c => {
            return `<li data-id='${c.id}'>
            <p data-id='${c.id}' class="challenge question">${c.question}</p>
            <p data-id='${c.id}' class="challenge description">${c.description}</p>
            <p data-id='${c.id}' class="challenge solution">${c.solution}</p></li>
            <button data-dayId='${c.dayId}' class='challenge-delete-button' data-id=${c.id}>Delete Challenge</button>`
        })
    }

    renderDay(){
        return `<button class="collapsible day-button" data-id='${this.id}' id='dateid${this.id}'>${this.date}</button>
        <div class="challenges challenge">
        <button data-id='${this.id} class='new-challenge-button'>New Challenge</button>
        <button class='day-delete-button' data-id=${this.id}>Delete Day</button>
        <ol class="challenge">${this.renderChallenge().join("")}</ol>
        </div>`
    }
}



