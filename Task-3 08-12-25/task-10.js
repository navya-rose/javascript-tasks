
var number = 245
 var sum =0
 while(number!=0){
    let digit = number%10
    sum=sum+digit
    number=Math.floor(number/10)
 }
 console.log(`2+4+5=${sum}`);
