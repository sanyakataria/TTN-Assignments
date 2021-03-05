// Q5 Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

// import {areaCircle} from './lib'

const mod = require('./lib');

console.log("pi = " + mod.pi);

console.log("area of cylinder of radius=4 : " + mod.areaCircle(4));

console.log("area of cylinder of length=10 and breadth=5 : " + mod.areaRect(10,5));

console.log("area of cylinder of radius=2 and height=5 : " + mod.areaCyl(2,5));