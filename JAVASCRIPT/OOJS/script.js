//Q1. Create a hierarchy of person, employee and developers.
function person() {
  this.human = true;
}

function employee() {
  this.id = 123;
  this.name = "john";
}

employee.prototype = new person();

function developer() {
  this.profile = "frontend developer";
}

developer.prototype = new employee();
var dev = new developer();

console.log(dev.profile);
console.log(dev.id);
console.log(dev.name);
console.log(dev.human);





//Q2.Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  task(arr[i], i);
}

function task(num, i) {
  setTimeout(function () {
    console.log(num);
  }, 3000 * i);
}

// //or

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(arr[i]);
//   }, 3000 * i);
// }





//Q3. Explain difference between Bind and Call (example).
//call
var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person1 = {
  firstName: "John",
  lastName: "Doe",
};
var x = person.fullName.call(person1);
console.log("call : " + x);

//bind
var person3 = {
  name: "sanya",
  print: function () {
    return this.name;
  },
};
var p = person3.print;
console.log("p before bind : " + p());
p = p.bind(person3);
console.log("p after bind : " + p());





//Q5. Create a function which returns the number of invocations and number of instances of a function.
var invocation_count = 0;
var instance_count = 0;

function person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  instance_count++;
  this.fullname = function () {
    invocation_count++;
    return fname + " " + lname;
  };
}

var p1 = new person("ravi", "dubey");
var p2 = new person("nora", "doe");
var p3 = new person("jiya", "singh");

console.log(p1.fullname());
console.log(p2.fullname());
console.log("number of invocations : " + invocation_count);
console.log("number of instances : " + instance_count);





//Q6. Create a counter using closures.
var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

function myFunction() {
  add();
  add();
  console.log(add());
  add();
  console.log(add());
}

myFunction();





//Q7. Explain 5 array methods with examples.
var fruits = ["Banana", "Orange", "Apple", "Mango", "Berry", "Melon", "Guava"];

console.log("original array : " + fruits);

console.log("join : " + fruits.join("*"));

console.log("slice : " + fruits.slice(2, 6));

console.log("push : " + fruits.push("Watermelon"));

console.log("pop : " + fruits.pop());

console.log("sort : " + fruits.sort());
