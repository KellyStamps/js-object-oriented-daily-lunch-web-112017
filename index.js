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

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}




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
    let allDeliveries = this.employees().map(employee => {
      return employee.deliveries();
    });
    let merged = [].concat.apply([], allDeliveries);
    return merged;
  }

  meals () {
    let allMeals = this.deliveries().map(del => {
      return del.meal();
    });
    let merged = [].concat.apply([], allMeals);
    return merged.filter(onlyUnique);

  }

  mealTotals () {

  }

}




class Customer {


  constructor(name, employer ={}) {
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
      return this.deliveries()[0].customerId === this.id
    })
  }

  deliveries () {
    return store.deliveries.filter (del => {
      return del.customerId === this.id
    })
  }

  totalSpent () {
    let delivs = this.deliveries()
    return delivs.reduce((total, amount) => total + amount);
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
    return store.deliveries.filter (del => {
      if (del.mealId === this.id) {
      return del }
    })

  }

  customers() {

    return store.customers.filter (cust => {
      return this.deliveries()[0].mealId === this.id;
    })
  }

  byPrice () {

  }

}

class Delivery {


  constructor (meal = {}, customer = {}) {
    // this.meal = meal
    // this.customer = customer
    this.id = ++deliveryId
    this.customerId = customer.id
    this.mealId = meal.id

    store.deliveries.push(this)
  }

  meal () {
    return store.meals.find (meal => {
      if (meal.id === this.mealId) {
      return meal }
    })
  }

  customer () {
    return store.customers.find (cust => {
      if (cust.id === this.customerId) {
      return cust }
    })
  }

}
