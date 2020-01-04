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
        this.boundRender = this.render.bind(this)
        this.messagesDiv = document.querySelector('.messages')
        this.dayButton.addEventListener('click', this.createDay.bind(this))
        this.daysContainer.addEventListener('dblclick', this.handleDayClick.bind(this))
        this.daysContainer.addEventListener('keydown', this.updateDay.bind(this))
    }

    renderDeleteEventListeners(){
        const deleteButtons = document.querySelectorAll('.delete-button')
        let i
        for (i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const day = e.target
                const dayIndex = this.days.indexOf(day)
                this.adapter.deleteDay(day.dataset.id)
                .then(this.days.splice(dayIndex, 1))
                .then(() => this.boundRender())
            }.bind(this))
        }
    }

    updateDay(e){
        if (e.keyCode === 13){
          e.preventDefault()
          const div = e.target
          const newValue = div.innerText
          const id = div.dataset.id
          div.contentEditable = false
          div.classList.remove("editable")
          this.adapter.updateDay(newValue, id)
          this.messagesDiv.innerHTML = ``
          alert(`${newValue} saved`)
        }
    }

    handleDayClick(e){
        const div = e.target
        div.contentEditable = true
        div.focus()
        div.classList.add("editable")
        this.messagesDiv.innerHTML = `<h3>${div.innerText} is not saved</h3><h4>please press 'enter' key to save</h4>`
    }



    createDay(e){
        e.preventDefault()
        this.adapter.createDay(this.newDate())
        .then(day => this.days.push(new Day(day)))
        .then(() => this.boundRender())
    }

    newDate(){
        let date = new Date()
        let dd = date.getDate()
        if (dd < 10){
            dd = "0" + dd
        }
        let mm = date.getMonth() + 1
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
        .then(() => this.boundRender())
    }

    render(){
        this.daysContainer.innerHTML = this.days.map(day => day.renderDay()).join("")
        const coll = document.getElementsByClassName("collapsible")
        let i
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function(e) {
            e.preventDefault()
            this.classList.toggle("active")
            let content = this.nextElementSibling
            if (content.style.maxHeight){
              content.style.maxHeight = null
            } else {
              content.style.maxHeight = content.scrollHeight + "px"
            }
          })
        }
        const boundRenderDeleteEventListeners = this.renderDeleteEventListeners.bind(this)
        boundRenderDeleteEventListeners()
    }


}



