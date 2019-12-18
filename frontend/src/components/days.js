class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadDays()
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
        const daysString = this.days.map(day => `<div class="day-container"><h3>Date: ${day.date} </h3></div>`).join("")
        const dayscontainer = document.querySelector('div.days-container')
        const div = document.createElement('div')
        div.innerHTML = daysString
        dayscontainer.appendChild(div)
    }
}



