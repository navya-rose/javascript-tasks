
var foods=["dosa","idali","uppma","appam"]

//length
// console.log(foods.length);

//push(value) => add values at end of the array 
// foods.push("chapathy")
// console.log(foods);

//pop => removes last element from the array
// foods.pop()
// console.log(foods);

//unshift
// foods.unshift("puttu")
// console.log(foods);

//shift
// foods.shift()
// console.log(foods);

//indexof
let food=foods.indexOf("idali")
console.log(food);

// include =>determine whether an array includes a certain element ,returning true or false
// let isexist=foods.includes("uppma")
// console.log(isexist);

//slice
// 'let portion=foods.slice(0,3)
// console.log(portion);'


var foods=["dosa","idali","uppma","appam","coffee","tea"]
// splice  => index from start delete  and adding elements

foods.splice(1,2)
// // console.log(foods);

foods.splice(1,1,"chapathy") //added one element
// console.log(foods);
