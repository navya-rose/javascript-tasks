
var number =153
var count =0
var numberCopy = number
var sum = 0
var orginal = number

while(number!=0){
    count++
    number=Math.floor(number/10)
}
console.log(count);

while(numberCopy!=0){
    let digit = numberCopy%10
    expo=digit^count 
    sum=sum+expo
    numberCopy=Math.floor(number/10)
}
console.log(orginal==sum?"amstrong":"not amstrong");

