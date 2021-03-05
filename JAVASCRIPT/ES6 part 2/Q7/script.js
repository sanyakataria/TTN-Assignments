// Q7 Write a program to flatten a nested array to single level using arrow functions.

var arr = [1,2,3,[4,5,6,[7,8,10,11]],7,[8,9]];
var ans = [];

const flaten = (arr) => {
    for(var i=0;i<arr.length;i++){
        // console.log(typeof(arr[i]));
        if(typeof(arr[i]) == "object"){
            flaten(arr[i]);
        }else{
            ans.push(arr[i]);
        }
    }
}

flaten(arr);
console.log(ans);