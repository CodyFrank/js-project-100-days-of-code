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

    renderChallengeQuestion(){
        return this.challenges.map(c => c.question)
    }

    renderChallengeDescription(){
        return this.challenges.map(c => c.description)
    }

    renderChallengeSolution(){
        return this.challenges.map(c => c.Solution)
    }

    renderDay(){
        return `<button class="collapsible day-button" data-id='${this.id}' id='dateid${this.id}'>${this.date}</button>
        <div class="challenges">
        <p>${this.renderChallengeQuestion()}<p>
        <p>${this.renderChallengeDescription()}<p>
        <p>${this.renderChallengeSolution()}<p>
          <button class='delete-button' data-id=${this.id}>Delete</button>
        </div>`
    }
}


{/* <p>put a challenge here</p>
<p>put a solution here</p>
<p>put a description here</p> */}

