class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDays()
    }

    initBindingsAndEventListeners(){
        this.daysContainer = document.querySelector('div.days-container')
        this.dayButton = document.getElementById("new-day-button")
        this.dayButton.addEventListener('click', this.createDay.bind(this))
        this.daysContainer.addEventListener('dblclick', this.handleDayClick.bind(this))
    }

    handleDayClick(e){
        const div = e.target
        div.contentEditable = true
    }

    createDay(e){
        e.preventDefault()
        this.adapter.createDay(this.newDate())
        .then(day => this.days.push(new Day(day)))
        this.render()
    }

    newDate(){
        const date = new Date()
        const dd = date.getDate()
        if (dd < 10){
            dd = "0" + dd
        }
        const mm = date.getMonth() + 1
        if (mm < 10){
            mm = "0" + mm
        }
        const year = date.getFullYear()
        return `${mm}/${dd}/${year}`
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
        console.log(this.daysContainer)
        this.daysContainer.innerHTML = this.days.map(day => day.renderDay()).join("")
    }
}



