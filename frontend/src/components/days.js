class Days{
    constructor(){
        this.days = []
        this.dayAdapter = new DaysAdapter()
        this.challengeAdapter = new ChallengesAdapter()
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

    renderCreateChallengeEventListeners(){
        const createButtons = document.querySelectorAll('.new-challenge-button')
        let i
        for (i = 0; i < createButtons.length; i++) {
            createButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const day = e.target
                this.challengeAdapter.createChallenge(day.dataset.id)
                .then((c) => this.days.find(d => d.id === c.day_id).challenges.push(new Challenge(c)))
                .then(() => this.boundRender())
            }.bind(this))
        }
    }

    renderDayDeleteEventListeners(){
        const deleteButtons = document.querySelectorAll('.day-delete-button')
        let i
        for (i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const day = e.target
                const dayIndex = this.days.indexOf(day)
                this.dayAdapter.deleteDay(day.dataset.id)
                .then(this.days.splice(dayIndex, 1))
                .then(() => this.boundRender())
            }.bind(this))
        }
    }

    renderChallengeDeleteEventListeners(){
        const deleteButtons = document.querySelectorAll('.challenge-delete-button')
        let i
        for (i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const challenge = e.target
                const day = this.days.find(d => d.id == challenge.dataset.dayid)
                const challengeIndex = day.challenges.indexOf(challenge)
                this.challengeAdapter.deleteChallenge(challenge.dataset.id)
                .then(day.challenges.splice(challengeIndex, 1))
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
          if(div.classList.value.includes("challenge")){
              if(div.classList.value.includes("solution")){
                this.challengeAdapter.updateChallengeSolution(newValue, id)
              }else if(div.classList.value.includes("description")){
                this.challengeAdapter.updateChallengeDescription(newValue, id)
              }else if(div.classList.value.includes("question")){
                this.challengeAdapter.updateChallengeQuestion(newValue, id)
              }
          }else if(div.classList.value.includes("day-button")){
            this.dayAdapter.updateDay(newValue, id)
          }
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
        this.dayAdapter.createDay(this.newDate())
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
        this.dayAdapter.getDays()
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
        const boundRenderDayDeleteEventListeners = this.renderDayDeleteEventListeners.bind(this)
        const boundRenderChallengeDeleteEventListeners = this.renderChallengeDeleteEventListeners.bind(this)
        const boundRenderCreateChallengeEventListeners = this.renderCreateChallengeEventListeners.bind(this)
        boundRenderDayDeleteEventListeners()
        boundRenderChallengeDeleteEventListeners()
        boundRenderCreateChallengeEventListeners()
    }


}



// this.days.find(d => d.id === c.day_id