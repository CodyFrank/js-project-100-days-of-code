class Day{
    constructor(dayJSON){
        this.id = dayJSON.id
        this.date = dayJSON.date
        this.challenges = []
        dayJSON.challenges.forEach(c => this.challenges.push(c))
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.daysContainer = document.querySelector('div.days-container')
    }

    renderDay(){
        return `<button class="collapsible" data-id='${this.id}' id='dateid${this.id}'>${this.date}</button>
        <div class="challenges">
          <p>put a challenge here</p>
          <p>put a solution here</p>
          <p>put a description here</p>
          <button id='delete-button' data-id=${this.id}>Delete</button>
        </div>`
    }
}

