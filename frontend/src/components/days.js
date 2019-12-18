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
        console.log(this.days)
        const container = document.querySelector('div.container')
        const div = document.createElement('div')
        div.innerHTML = `<h1>${"rendering..."}</h1>`
        container.appendChild(div)
    }
}



