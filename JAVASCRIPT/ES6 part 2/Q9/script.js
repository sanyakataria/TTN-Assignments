//Q9 Implement Map and Set using Es6?
// presenter told us to just use methods of Map and Set.

// set

const myset = new Set();

myset.add(1);
myset.add(2);
myset.add(2);
myset.add(5);
myset.add("abcdef");
const o = {a:1,b:2};
myset.add(o);

console.log(myset);

console.log(myset.has(1));
console.log(myset.has(Math.sqrt(25)));

console.log("size of set : " + myset.size);

for(item of myset){
    console.log(item);
}

//map

let mymap = new Map();

mymap.set('1','abc');
mymap.set('2','def');
mymap.set('name',"sanya");
mymap.set('bla',{'a' : '123456','b' : '123','c' : '90'});

console.log(mymap);

console.log(mymap.has('bla'));
console.log(mymap.get('1'));
mymap.set('2','qwerty');
mymap.delete('bla');

console.log(mymap);

console.log("size of map : " + mymap.size);