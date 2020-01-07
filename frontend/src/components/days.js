// days class is where most of the app lives. can think of this as a container for day objects
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
        // binds this to render method allowing the same "this" in all render calls
        this.boundRender = this.render.bind(this)
        this.messagesDiv = document.querySelector('.messages')
        this.dayButton.addEventListener('click', this.createDay.bind(this))
        // adds click event listeners to editable content
        this.daysContainer.addEventListener('dblclick', this.handleDayClick.bind(this))
        this.daysContainer.addEventListener('keyup', this.updateDay.bind(this))
    }

    // adds the event listener to all of the create challenge buttons
    renderCreateChallengeEventListeners(){
        // creates a variable that holds an array of new challenge button nodes
        const createButtons = document.querySelectorAll('.new-challenge-button')
        let i
        // itterates array and binds event listener to them 
        for (i = 0; i < createButtons.length; i++) {
            createButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const day = e.target
                // adapter sends fetch request to backend
                this.challengeAdapter.createChallenge(day.dataset.id)
                // instatiates a new challenge object and adds that to the found day's challenges array
                .then((c) => {
                  this.days.find(d => d.id === c.day_id).challenges.push(new Challenge(c))
                  // calls render to update what is shown
                  this.boundRender()
                })
            }.bind(this))
        }
    }

    // adds the event listener to all of the delete day buttons
    renderDayDeleteEventListeners(){
          // creates a variable that holds an array delete day button nodes
        const deleteButtons = document.querySelectorAll('.day-delete-button')
        let i
        // itterates array and binds event listener to them 
        for (i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const day = e.target
                const dayIndex = this.days.indexOf(day)
                  // adapter sends fetch request to backend returns promise
                this.dayAdapter.deleteDay(day.dataset.id)
                // removes delete content from the days array
                .then(() => {
                  this.days.splice(dayIndex, 1)
                  // calls render to update what is shown
                  this.boundRender()
                })
            }.bind(this))
        }
    }

    // adds the event listener to all of the delete challenge buttons
    renderChallengeDeleteEventListeners(){
        // creates a variable that holds an array delete challenge button nodes
        const deleteButtons = document.querySelectorAll('.challenge-delete-button')
        let i
        // itterates array and binds event listener to them 
        for (i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener("click", function(e) {
                e.preventDefault()
                const challenge = e.target
                // finds a day
                const day = this.days.find(d => d.id == challenge.dataset.dayid)
                const challengeIndex = day.challenges.indexOf(challenge)
                // tells adapter to fire a fetch request returns promise
                this.challengeAdapter.deleteChallenge(challenge.dataset.id)
                // removes the deleted challenge from earlier found day's challenge array
                .then(() => {
                  day.challenges.splice(challengeIndex, 1)
                  // calls render to update what is shown
                  this.boundRender()
                })
            }.bind(this))
        }
    }

    // function to handle the "enter" presses to fire the update and adjust the css
    updateDay(e){
        // checks to ensure enter button was pressed
        if (e.keyCode === 13){
          e.preventDefault()
        //   sets the variables that will be used to update content
          const div = e.target
          const newValue = div.innerText
          const id = div.dataset.id
        //   removes content editable 
          div.contentEditable = false
        //   removes editable class
          div.classList.remove("editable")
        //   checks too see what kind of update is needed challenge or day
          if(div.classList.value.includes("challenge")){
            //   if it is a challenge to be updated checks to see what propertie will be updated
              if(div.classList.value.includes("solution")){
                this.challengeAdapter.updateChallengeSolution(newValue, id)
              }else if(div.classList.value.includes("description")){
                this.challengeAdapter.updateChallengeDescription(newValue, id)
              }else if(div.classList.value.includes("question")){
                this.challengeAdapter.updateChallengeQuestion(newValue, id)
              }
            //   handles day update
          }else if(div.classList.value.includes("day-button")){
            this.dayAdapter.updateDay(newValue, id)
          }
        //   alerts success message after update
          this.messagesDiv.innerHTML = ``
          alert(`${newValue} saved`)
        }
    }

    // function to handle the click on an editable node makes the node editable
    handleDayClick(e){
        const div = e.target
        // makes content ediatble
        div.contentEditable = true
        // sets focus
        div.focus()
        // adds editable class
        div.classList.add("editable")
        // adds messege to help users remember to save
        this.messagesDiv.innerHTML = `<h3>${div.innerText} is not saved</h3><h4>please press 'enter' key to save</h4>`
    }



    // handles the click on create day button to create a new day
    createDay(e){
        e.preventDefault()
        // tells adapter to send fetch request returns promise
        this.dayAdapter.createDay(this.newDate())
        // instantiates new day and pushes it to day array
        .then(day => {
          this.days.push(new Day(day))
          // rerenders to update content
          this.boundRender()
        })
    }

    // grabs the current date and formats it to be used when a day is created
    newDate(){
        // instantiates new "built in" date object
        let date = new Date()
        // calls built in method to get day
        let dd = date.getDate()
        // checks and formats day
        if (dd < 10){
            dd = "0" + dd
        }
        // calls built in method to get month "months are formatted starting at 0"
        let mm = date.getMonth() + 1
        // checks and formats month
        if (mm < 10){
            mm = "0" + mm
        }
        // uses built in method to grab year
        const year = date.getFullYear()
        // formats full full date return value
        return `${mm}/${dd}/${year}`
    }

    // gets called on instantition tells the days adapter to fetch days and calls render
    fetchAndLoadDays(){
        // tells adapter to send get fetch request returns promise
        this.dayAdapter.getDays()
        // handles that promise
        .then(days => {
            // itterates days array and creates new day object for each then saves them in days array
            days.forEach(day => {
              this.days.push(new Day(day))
                      // renders page to update content
              this.boundRender()
            })
        })
    }

    // renders content to page
    render(){
        // itterates through days and tells day class to render each days html then joins html into string inside inner html
        this.daysContainer.innerHTML = this.days.map(day => day.renderDay()).join("")
        // gathers nodes marked collapsible
        const coll = document.getElementsByClassName("collapsible")
        let i
        // creates drop animations
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
        // end drop animations
        // binds this to methods that render event listeners on rendered content
        const boundRenderDayDeleteEventListeners = this.renderDayDeleteEventListeners.bind(this)
        const boundRenderChallengeDeleteEventListeners = this.renderChallengeDeleteEventListeners.bind(this)
        const boundRenderCreateChallengeEventListeners = this.renderCreateChallengeEventListeners.bind(this)
        // calls bound methods to render event listeners
        boundRenderDayDeleteEventListeners()
        boundRenderChallengeDeleteEventListeners()
        boundRenderCreateChallengeEventListeners()
    }


}



