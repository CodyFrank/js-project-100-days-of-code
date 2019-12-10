class Days{
    constructor(){
        this.days = []
        this.adapter = new DaysAdapter()
        this.bindEventListeners()
        this.fetchAndLoadDays()
    }
}