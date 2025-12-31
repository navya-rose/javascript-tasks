
var number= [10,15,20,25,30,35]
var oddCount =0
var evenCount=0
for(let n of number){
    if(n%2==0){
        evenCount++
    }
    else{
        oddCount++
    }
}
console.log(`even count = ${evenCount}`);
console.log(`odd count = ${oddCount}`);

