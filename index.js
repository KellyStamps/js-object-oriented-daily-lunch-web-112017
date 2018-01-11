let store = {
  employers: [],
  customers: [],
  meals: [],
  deliveries: []
}

let employerId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;




class Employer {

  constructor (name) {
    this.name = name
    this.id = ++employerId
    store.employers.push(this)
  }

  employees () {

    return store.customers.filter (cust => {
      return cust.employerId === this.id
    })

  }

  deliveries () {
    let emps = this.employees()
    let delivs = []
    emps.forEach (function (emp){
      emp.deliveries.forEach (function (del){
        delivs.push(del)
      })
    })
    return delivs
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
    this.id = ++customerId
    if (employer) {
      this.employerId = employer.id
    }

    store.customers.push(this)

  }

  meals () {
    return store.meals.filter (meal => {
      return meal.customerId === this.id
    })
  }

  deliveries () {
    return store.deliveries.filter (del => {
      return del.customerId === this.id
    })
  }

  totalSpent () {

  }
}



class Meal {



  constructor (title, price) {
    this.title = title
    this.price = price
    this.id = ++mealId

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


  constructor (meal = {}, customer = {}) {
    this.meal = meal
    // this.customer = customer
    this.id = ++deliveryId
    this.customerId = customer.id
    this.mealId = meal.id

    store.deliveries.push(this)
  }

  meal () {

  }

  customer () {

  }

}
