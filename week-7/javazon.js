/*
==============================================
;   Title: javazon.js
;   Author: Patrick Cuauro
;   Date: 11 28 2022
;   Modified by: Patrick Cuauro
;   Description: JavaScript file for javazon.html
==============================================
*/
class Product {
    constructor(id, description, price, quantity) {
      this.id = id;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
    }
    totalValue() {
        let totalValue = (669).toFixed(2);
    }
  }

  class Services {
    constructor(id, description, hourlyRate, min) {
      this.id = id;
      this.description = description;
      this.hourlyRate = (hourlyRate).toFixed(2);
      this.min = min;
    }
  }
  class Employee {
    constructor(id, firstName, lastName, salary) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
    }
  }
  let choice = "undefined";
  let cellPhone = new Product (123456, "Google Pixel 7 Pro", 700, 788);
  let laptop = new Product (654321, "HP Envy x360", 560, 23);
  let snickers = new Product (162534, "Skechers shoes", 80, 330);
  let car = new Product (342516, "Honda Civic", 34000, 30);
  let cap = new Product (524361, "Nike cap", 40, 4000);

  let haircut = new Services (112233, "Haircut", 20, 30);
  let massage = new Services (223344, "Massage", 23, 30);
  let pedicure = new Services (334455, "Pedicure", 30, 40);
  
  let reubenMeyer = new Employee (154065, "Reuben", "Meyer", 28);
  let milaKunanis = new Employee (321540, "Mila", "Kunanis", 30);
  let sandraLinn = new Employee (189915, "Sandra", "Linn", 32);
  let carlHendricks = new Employee (108342, "Carl", "Hendricks", 22);
  let peterStein = new Employee (369248, "Peter", "Stein", 28);

  document.getElementById("products").style.display = "none";
  document.getElementById("services").style.display = "none";
  document.getElementById("employees").style.display = "none";
  
  const myProduct = new Product(11181980, "Solar Panel", 245, 4);
//  document.getElementById("demo").innerHTML =
  //myProduct.id + " " + myProduct.description;
console.log (myProduct.id + " " + myProduct.description + " " + myProduct.price + " " + myProduct.quantity);

btnDisplayListing.addEventListener("click", function () {
  let choice = document.getElementById("listing").value;
  console.log(choice);
  if (choice == "select") {
    alert("Make a selection");
  }
  else if (choice == "products") {
    document.getElementById("products").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("employees").style.display = "none";
  }
  else if (choice == "services") {
    document.getElementById("products").style.display = "none";
    document.getElementById("services").style.display = "block";
    document.getElementById("employees").style.display = "none";
  }
  else if (choice == "employees") {
    document.getElementById("products").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("employees").style.display = "block";
  }
});