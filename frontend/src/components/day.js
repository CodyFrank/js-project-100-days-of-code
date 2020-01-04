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
            return `<li><p>${c.question}</p>
            <p>${c.description}</p>
            <p>${c.solution}</p></li>`
        })
    }

    renderDay(){
        return `<button class="collapsible day-button" data-id='${this.id}' id='dateid${this.id}'>${this.date}</button>
        <div class="challenges">
        <ul>${this.renderChallenge().join("")}</ul>
          <button class='delete-button' data-id=${this.id}>Delete</button>
        </div>`
    }
}



