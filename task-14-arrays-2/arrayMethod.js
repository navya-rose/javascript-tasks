
var numbers =[12,5,20,8,15,30,7,25,10,18]

// question - 1 square of each number
var square = numbers.map(n=>n**2);
// console.log("square of numbers ",square);



//question-2 number lessthan 10
var lessthan = numbers.filter(n=>n<10)
// console.log("lessthan 10 = ",lessthan);



//question-3 average
var average = numbers.reduce((n1,n2)=>n1+n2/numbers.length)
// console.log("average = ",average);



// //question-4 smallest number
// var smallest = numbers.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log("smallest number = ",smallest);



// //question-5 odd numbers
// var odd = numbers.filter(n=>n%2!=0)
// console.log("odd numbers = ",odd);



// //question-6 third smallest
// var sort = numbers.sort((n1,n2)=>n1-n2)
// var thirdsmallest=sort[2]
// console.log("third smallest = ",thirdsmallest);



// //question-7 substracting 2
// var substracting = numbers.map(n=>n-2)
// console.log("substracting 2 =",substracting);


// //question-8 sum of even numbers
// var even = numbers.filter(n=>(n%2==0))
// var sum = even.reduce((n1,n2)=>n1+n2)
// console.log("sum of evens = ",sum);


// //question-9 greaterthan average
// var average = numbers.reduce((n1,n2)=>n1+n2/numbers.length)
// var GTofaverage = numbers.filter(n=>n>average)
// console.log(`greaterthan average value = ${GTofaverage}`);


// //question-10 divisible by 5
// var divisibleFive = numbers.filter(n=>n%5==0)
// console.log("divisible by 5 = ",divisibleFive);

// //question-11 sort desending order and display first element
// var desending = numbers.sort((n1,n2)=>n2-n1)
// var firstElement =desending[0]
// console.log("first element of sorted order = ",firstElement);



//question-12 converting in to string
var string = numbers.map(n => n.toString());
console.log("converting string = ",string);

//question-13 diffrence between max and min
var maximum = numbers.reduce((n1,n2)=>n1>n2?n1:n2)
var minimum = numbers.reduce((n1,n2)=>n1<n2?n1:n2)
var diffrence = maximum-minimum
console.log("diffrence = ",diffrence);

//question-14 multiplying by index value
var multiplying=numbers.map((n,i)=>n*i)
console.log(multiplying);

//question-15 all numbers greaterthan 5
var GTfive = numbers.every(n=>n>=5)
console.log("greaterthan 5 = ",GTfive);






 