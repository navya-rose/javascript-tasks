
//map

// var numbers = [10,11,12,13,14,15]
// //add five 
// var addFive = numbers.map(n=>n+5);
// console.log(addFive);

// //squares
// var squres = numbers.map(n=>n**2);
// console.log(squres);

// //cubes
// var cube = numbers.map(n=>n**3);
// console.log(cube);

//filter

// //greaterthan 13
// var GTthirteen =numbers.filter(n=>n>13)
// console.log(GTthirteen);

// // odd numbers
// var odd = numbers.filter(n=>n%2!=0)
// console.log(odd);

// //even numbers
// var even =numbers.filter(n=>n%2==0)
// console.log(even);


// var words = ["powerful","thoughtful","beautiful","meaningful","housefull"]

// // var uppercase =words.map(w=>w.toUpperCase())
// // console.log(uppercase);

// //words ends with ful
// var fulWords = words.filter(w=>w.endsWith("ful"))
// console.log(fulWords);

// //reduce

// var numbers = [10,11,12,13,14,15]

// //maximum numbers
// let maxNumbers = numbers.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(maxNumbers);

// //minmum numbers
// let minNumbers = numbers.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(minNumbers);

// //total
// let total =numbers.reduce((n1,n2)=>n1+n2)
// console.log(total);


//sort

var numbers = [10,5,11,50,12,30,13,14,100,15]

//sort accending order
numbers.sort((n1,n2)=>n1-n2)
console.log(numbers);

//sort deccending order
numbers.sort((n1,n2)=>n2-n1)
console.log(numbers);

