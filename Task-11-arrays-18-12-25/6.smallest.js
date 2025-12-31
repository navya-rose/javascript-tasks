
var number = [10,20,30,40,50]
var smallest = number[1]
for(let n of number){
    if(n<smallest){
        smallest=n
    }
}
console.log(smallest);
