class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.fetchAndLoadDays()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.daysContainer = document.querySelector('div.days-container')
        this.dayButton = document.getElementById("new-day-button")
        this.body = document.querySelector("body")
        this.deleteButton = document.getElementById('delete-button')
        this.dayButton.addEventListener('click', this.createDay.bind(this))
        this.daysContainer.addEventListener('dblclick', this.handleDayClick.bind(this))
        this.body.addEventListener('blur', this.updateDay.bind(this), true)
        this.deleteButton.addEventListener('click', this.deleteDay.bind(this))
    }

    deleteDay(e){
        e.preventDefault
        console.log("deleteing day")
    }


    updateDay(e){
        // const deleteButton = document.getElementById('delete-button')
        // deleteButton.remove()
        const div = e.target
        const newValue = div.innerText
        const id = div.dataset.id
        div.contentEditable = false
        div.classList.remove("editable")
        this.adapter.updateDay(newValue, id)
    }

    handleDayClick(e){
        const div = e.target
        div.contentEditable = true
        div.focus()
        div.classList.add("editable")
        // this.renderDeleteButton(div)
    }

    // renderDeleteButton(node){
    //     node.innerHTML = node.innerHTML + "<button id='delete-button'>Delete</button>"
    // }

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
        this.daysContainer.innerHTML = this.days.map(day => day.renderDay()).join("")
    }
}



