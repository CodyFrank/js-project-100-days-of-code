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
        const div = document.createElement('div')
        div.setAttribute('class', 'day-container')
        div.innerHTML = `<h3>Date: ${this.date}</h3>`
        this.daysContainer.appendChild(div)  
    }
}