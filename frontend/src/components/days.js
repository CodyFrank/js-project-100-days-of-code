class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDays()
    }

    initBindingsAndEventListeners(){
        this.dayButton = document.getElementById("new-day-button")
        this.dayButton.addEventListener('click', (e) => this.createDay(e))
    }

    createDay(e){
        e.preventDefault()
        console.log("a new day is being created")
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



