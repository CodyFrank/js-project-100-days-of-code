class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDays()
    }

    initBindingsAndEventListeners(){
        this.daysContainer = document.querySelector('div.days-container')
    }

    fetchAndLoadDays(){
        this.adapter
        .getDays()
        .then(days => {
            days.forEach(day => this.days.push(new Day(day)))
        })
        .then(() => this.render())
    }

    render(){
        const daysString = this.days.map(day => `<h3>Date: ${day.date} </h3>`).join("")
        const div = document.createElement('div')
        div.setAttribute('class', 'day-container')
        div.innerHTML = daysString
        this.daysContainer.appendChild(div)
    }
}



