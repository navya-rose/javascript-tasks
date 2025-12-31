
var number =[20,25,30,35,40]
var largest = 0
var secondLargest = 0

for(let n of number){
    if(n>largest){
        secondLargest=largest
        largest=n
    }
}
console.log(secondLargest);
