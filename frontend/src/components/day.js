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
        return `<div class='day-container'><h3>Date: ${this.date}</h3></div>`
    }
}

