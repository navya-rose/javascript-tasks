
var number = 65834
var smallest=8
while(number>0){
    let digit =number%10
    if(smallest>digit){
        smallest=digit
    }
    number=Math.floor(number/10)
}
console.log(`smallest digit = ${smallest}`);
