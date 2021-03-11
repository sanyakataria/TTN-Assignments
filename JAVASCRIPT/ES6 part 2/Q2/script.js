//Q2 Find the possible combinations of a string and store them in a MAP?

// let str = "abcd";
// let ans = "";
// const mymap = new Map();
// function permutation(str, ans) {
//   if (str.length == 0) {
//     if (!mymap.has(ans)) mymap.set(ans, 1);
//     return;
//   }

//   for (let i = 0; i < str.length; i++) {
//     let rstr = str.substring(0, i) + str.substring(i + 1);
//     permutation(rstr, ans + str[i]);
//   }
// }
// permutation(str, ans);
// console.log(mymap);

let str1 = "abcd";
let ans1 = "";
const map1 = new Map();
function combination(str, ans) {
  if (str.length == 0) {
    if (ans && !map1.has(ans)) {
      map1.set(ans, 1);
    }
    return;
  }

  let ch = str.charAt(0);
  let roq = str.substring(1);
  combination(roq, ans + ch);
  combination(roq, ans + "");
}

combination(str1, ans1);
console.log(map1);
