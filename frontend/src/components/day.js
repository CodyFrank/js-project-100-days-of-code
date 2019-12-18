class Day{
    constructor(dayJSON){
        this.id = dayJSON.id
        this.date = dayJSON.date
        this.challenges = []
        dayJSON.challenges.forEach(c => this.challenges.push(c))
    }

    renderDiv(){
        console.log("renderDiv has been called")
        const div = document.createElement('div')
        div.setAttribute('class', 'day-container')
        div.innerHTML = `<h3>Date: ${this.date} </h3>`  
    }
}