var number =[20,25,30,35,40]
var large = number[0]
var small = number[0]
for(let n of number){
    if(large<n){
        large=n
    }
}
console.log(`largest number =${large}`);

for(let n of number){
    if(small>n){
        small=n
    }
}
console.log(`smallest number =${small}`);
