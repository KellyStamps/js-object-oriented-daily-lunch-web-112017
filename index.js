let store = {
  employers: [],
  customers: [],
  meals: [],
  deliveries: []
}

let employerID = 0;
let customerID = 0;
let mealID = 0;
let deliveryID = 0;

class Employer {

  constructor (name) {
    this.name = name
    this.id = ++employerID
    store.employers.push(this)
  }

  employees () {
    // debugger
    // find customers with this.id matching from store

    store.customers.forEach ((cust) => (return cust.name))

  }

  deliveries () {

  }

  meal () {

  }

  mealTotals () {

  }

}




class Customer {


  constructor(name, employer) {
    this.name = name
    this.employer = employer
    this.id = ++customerID
    store.customers.push(this)

  }

  meals () {

  }

  deliveries () {

  }

  totalSpent () {

  }
}



class Meal {



  constructor (title, price) {
    this.title = title
    this.price = price
    this.id = ++mealID

    store.meals.push(this)
  }

  deliveries () {

  }

  customers() {

  }

  byPrice () {

  }

}

class Delivery {


  constructor (meal, customer) {
    this.meal = meal
    this.customer = customer
    this.id = ++deliveryID

    store.deliveries.push(this)
  }

  meal () {

  }

  customer () {

  }

}
