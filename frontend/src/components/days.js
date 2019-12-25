class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDays()
    }

    initBindingsAndEventListeners(){
        this.dayButton = document.getElementById("new-day-button")
        this.dayButton.addEventListener('click', this.createDay.bind(this))
    }

    createDay(e){
        e.preventDefault()
        this.adapter.createDay(this.newDate()).then(day => console.log(day))
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
        this.days.map(day => day.renderDay())
    }
}



