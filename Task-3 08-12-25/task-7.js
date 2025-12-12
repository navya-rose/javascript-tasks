
var number = 7864
var count = 0
while(number!=0){
    let digit = number%10
    count++
    number=Math.floor(number/10)
}
console.log(count);
