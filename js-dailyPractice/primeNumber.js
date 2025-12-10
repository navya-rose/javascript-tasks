
var num =34
var isprime = true

for(let i=2;i<34;i++){
    if(num%i==0){
        isprime=false
        break
    }

}
console.log(isprime?"prime number":"not prime number");
