class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadDays()
    }

    fetchAndLoadDays(){
        this.adapter.getDays()
        .then(days => days.data.forEach(day => this.days.push(day)))
        .then(() => this.render())
    }

    render(){
        const container = document.querySelector('div.container')
        const div = document.createElement('div')
        div.innerHTML = `<h1>Render activated</h1>`
        container.appendChild(div)
    }
}



