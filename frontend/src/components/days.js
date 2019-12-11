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
            console.log(days)
            // console.log(this.days)
        })
        .then(() => this.render())
    }

    render(){
        const container = document.querySelector('div.container')
        const div = document.createElement('div')
        div.innerHTML = `<h1>${this.days}</h1>`
        container.appendChild(div)
    }
}



