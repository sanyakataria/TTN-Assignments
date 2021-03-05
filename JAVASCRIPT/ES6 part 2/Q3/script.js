// Q3 Write a program to implement inheritance upto 3 classes.The Class must public variables
//    and static functions.

class vehicle {
  constructor(type) {
    this.type = type;
  }

  static getType(x) {
    return "vehicle type is : " + x.type;
  }
}

class car extends vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  show() {
    return "brand of car : " + this.brand;
  }
}

class model extends car {
  constructor(type, brand, model) {
    super(type, brand);
    this.model = model;
  }

  show1() {
    this.show();
    return "brand of car : " + this.brand + " ; model of car : " + this.model;
  }
}

let mycar = new model("Suv", "Hyundai", "Creta");
console.log(vehicle.getType(mycar));
console.log(mycar.show1());

