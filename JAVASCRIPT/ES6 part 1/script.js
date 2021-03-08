// Q1 Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

var arr = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const myfunc = (arr) => {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 70) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
};
myfunc(arr);

// Q2 Select all the list items on the page and convert to array. Filter for only the elements that contain the word 'flexbox' map down to a list of time strings map to an array of seconds reduce to get total using .filter and .map

var elements = document.getElementsByTagName("li");

var elements1 = Object.values(elements);
console.log(elements1);

var arr1 = [];
for (var i = 0; i < elements.length; i++) {
  arr1.push(elements[i]);
}
console.log(arr1);

const myfilter = (elem) => {
  if (elem.innerHTML.includes("Flexbox")) {
    return elem;
  }
};

var arr2 = arr1.filter(myfilter);
console.log(arr2);

const mymap = (elem) => {
  var x = elem.getAttribute("data-time");
  return x;
};

var arr3 = arr2.map(mymap);
console.log(arr3);

const mysplit = (elem) => {
  var x = elem.split(":");
  return parseInt(x[0]) * 60 + parseInt(x[1]);
};

var arr4 = arr3.map(mysplit);
console.log(arr4);

const myreduce = (total, num) => {
  return parseInt(total) + parseInt(num);
};

var arr5 = arr4.reduce(myreduce);
console.log(arr5);

// Q3 Create a markup template using string literal const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' }; Result: "<div class="song"> <p> Dying to live — Tupac (Featuring Biggie Smalls) </p> </div> “
const song = {
  name: "Dying to live",
  artist: "Tupac",
  featuring: "Biggie Smalls",
};

document.body.append(
  `<div class="song">
    <p> ${song.name} — ${song.artist} (Featuring ${song.featuring}) </p> 
    </div> `
);

// Q4. Extract all keys inside address object from user object using destructuring ?
const user = {
  firstName: "Sahil",
  lastName: "Dua",
  Address: {
    Line1: "address line 1",
    Line2: "address line 2",
    State: "Delhi",
    Pin: 110085,
    Country: "India",
    City: "New Delhi",
  },
  phoneNo: 9999999999,
};

var {
  firstName,
  lastName,
  Address: { Line1, Line2, State, Pin, Country },
  phoneNo,
} = user;

//is the below method also correct ?
// var { firstName, lastName, phoneNo } = user;
// var { Line1, Line2, State, Pin, Country } = user.Address;

console.log(firstName);
console.log(lastName);
console.log(Line1);
console.log(Line2);
console.log(State);
console.log(Pin);
console.log(Country);
console.log(phoneNo);
