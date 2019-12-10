class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadDays()
    }

    fetchAndLoadDays(){
        this.adapter.getDays().then(days => console.log(days))
    }
}