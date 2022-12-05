/*
==============================================
;   Title: javazon.js
;   Author: Patrick Cuauro
;   Date: 11 28 2022
;   Modified by: Patrick Cuauro
;   Description: JavaScript file for javazon.html
==============================================
*/
//Declaration of the variables and the classes.
class Product {
    constructor(id, description, price, quantity) {
      this.id = id;
      this.description = description;
      this.price = price;
      this.quantity = quantity;
      this.totalV = this.price * this.quantity;
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
  //Object declaration after the classes declaration.
  let cellPhone = new Product (123456, "Google Pixel 7 Pro", 700, 788);
  let laptop = new Product (654321, "HP Envy x360", 560, 23);
  let snickers = new Product (162534, "Skechers shoes", 80, 330);
  let car = new Product (342516, "Honda Civic", 34000, 30);
  let cap = new Product (524361, "Nike cap", 40, 4000);

  let haircut = new Services (112233, "Haircut", 20.667, 30);
  let massage = new Services (223344, "Massage", 23.567, 30);
  let pedicure = new Services (334455, "Pedicure", 30.769, 40);
  
  let reubenMeyer = new Employee (154065, "Reuben", "Meyer", 28);
  let milaKunanis = new Employee (321540, "Mila", "Kunanis", 30);
  let sandraLinn = new Employee (189915, "Sandra", "Linn", 32);
  let carlHendricks = new Employee (108342, "Carl", "Hendricks", 22);
  let peterStein = new Employee (369248, "Peter", "Stein", 28);
//binding information to the tables
//Product1
document.getElementById("productId1").innerHTML = cellPhone.id;
document.getElementById("productDesc1").innerHTML = cellPhone.description;
document.getElementById("productPrice1").innerHTML = cellPhone.price;
document.getElementById("productQty1").innerHTML = cellPhone.quantity;
document.getElementById("productTotalV1").innerHTML = cellPhone.totalV;
//Product2
document.getElementById("productId2").innerHTML = laptop.id;
document.getElementById("productDesc2").innerHTML = laptop.description;
document.getElementById("productPrice2").innerHTML = laptop.price;
document.getElementById("productQty2").innerHTML = laptop.quantity;
document.getElementById("productTotalV2").innerHTML = laptop.totalV;
//Product3
document.getElementById("productId3").innerHTML = snickers.id;
document.getElementById("productDesc3").innerHTML = snickers.description;
document.getElementById("productPrice3").innerHTML = snickers.price;
document.getElementById("productQty3").innerHTML = snickers.quantity;
document.getElementById("productTotalV3").innerHTML = snickers.totalV;
//Product4
document.getElementById("productId4").innerHTML = car.id;
document.getElementById("productDesc4").innerHTML = car.description;
document.getElementById("productPrice4").innerHTML = car.price;
document.getElementById("productQty4").innerHTML = car.quantity;
document.getElementById("productTotalV4").innerHTML = car.totalV;
//Product5
document.getElementById("productId5").innerHTML = cap.id;
document.getElementById("productDesc5").innerHTML = cap.description;
document.getElementById("productPrice5").innerHTML = cap.price;
document.getElementById("productQty5").innerHTML = cap.quantity;
document.getElementById("productTotalV5").innerHTML = cap.totalV;

//Service1
document.getElementById("serviceId1").innerHTML = haircut.id;
document.getElementById("serviceDesc1").innerHTML = haircut.description;
document.getElementById("serviceHourlyRate1").innerHTML = haircut.hourlyRate;
document.getElementById("serviceMin1").innerHTML = haircut.min;
//Service2
document.getElementById("serviceId2").innerHTML = massage.id;
document.getElementById("serviceDesc2").innerHTML = massage.description;
document.getElementById("serviceHourlyRate2").innerHTML = massage.hourlyRate;
document.getElementById("serviceMin2").innerHTML = massage.min;
//Service3
document.getElementById("serviceId3").innerHTML = pedicure.id;
document.getElementById("serviceDesc3").innerHTML = pedicure.description;
document.getElementById("serviceHourlyRate3").innerHTML = pedicure.hourlyRate;
document.getElementById("serviceMin3").innerHTML = pedicure.min;

//Employee1
document.getElementById("employeeId1").innerHTML = reubenMeyer.id;
document.getElementById("employeeFirstName1").innerHTML = reubenMeyer.firstName;
document.getElementById("employeeLastName1").innerHTML = reubenMeyer.lastName;
document.getElementById("employeeSalary1").innerHTML = reubenMeyer.salary;
//Employee2
document.getElementById("employeeId2").innerHTML = milaKunanis.id;
document.getElementById("employeeFirstName2").innerHTML = milaKunanis.firstName;
document.getElementById("employeeLastName2").innerHTML = milaKunanis.lastName;
document.getElementById("employeeSalary2").innerHTML = milaKunanis.salary;
//Employee3
document.getElementById("employeeId3").innerHTML = sandraLinn.id;
document.getElementById("employeeFirstName3").innerHTML = sandraLinn.firstName;
document.getElementById("employeeLastName3").innerHTML = sandraLinn.lastName;
document.getElementById("employeeSalary3").innerHTML = sandraLinn.salary;
//Employee4
document.getElementById("employeeId4").innerHTML = carlHendricks.id;
document.getElementById("employeeFirstName4").innerHTML = carlHendricks.firstName;
document.getElementById("employeeLastName4").innerHTML = carlHendricks.lastName;
document.getElementById("employeeSalary4").innerHTML = carlHendricks.salary;
//Employee5
document.getElementById("employeeId5").innerHTML = peterStein.id;
document.getElementById("employeeFirstName5").innerHTML = peterStein.firstName;
document.getElementById("employeeLastName5").innerHTML = peterStein.lastName;
document.getElementById("employeeSalary5").innerHTML = peterStein.salary;
//Event listener attached to the button of the page  
btnDisplayListing.addEventListener("click", function () {
  let choice = document.getElementById("listing").value;
  console.log(choice);
  //comparison of the selection to change the styles of the css file using the id of the page
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