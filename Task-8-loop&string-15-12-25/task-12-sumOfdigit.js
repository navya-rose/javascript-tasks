
var number = 8765432
var sum =0
while(number>0){
    digit = number%10
    if(digit%2!=0){
        sum+=digit
    }
    
    number=Math.floor(number/10)

}
console.log(sum);
