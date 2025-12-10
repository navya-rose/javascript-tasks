
var num =7
var isprime=true

for(let i=2;i<num;i++) {
    if(num%i==0){
        isprime=false
        break
    }
}
console.log(isprime?"prime number":"not a prime number");
