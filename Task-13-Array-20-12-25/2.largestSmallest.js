
//Write a program to find the largest and smallest element in an array.

var array = [10,20,30,40,50]
var largest = array[1]
var smallest = array[1]

for(let n of array){
    if(n>largest){
        largest=n
    }

}
for(let n of array){
    if(n<smallest){
        smallest=n
    }
}
console.log(`largest number = ${largest}`);
console.log(`smallest number = ${smallest}`);

