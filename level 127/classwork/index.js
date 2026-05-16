class car {
    constructor(model, year, price) {
        this.model = model
        this.year = year
        this.price = price
    }

    printCarDetails() {
        console.log(`model: ${this.model}`)
        console.log(`year: ${this.year}`)
        console.log(`price: ${this.price}`)
    }
}