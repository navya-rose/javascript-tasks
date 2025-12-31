
var number=[20,25,30,35,40]
var even = 0
var odd = 0
for(let n of number){
    if(n%2==0){
        even++
    }
}
console.log(`even number count = ${even}`);
for(let n of number){
    if(n%2!=0){
        odd++
    }
}
console.log(`odd number count = ${odd}`);
