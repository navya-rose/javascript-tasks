var array = [10,15,20,25,30]
var largest = 0
var secondlargest =0

for(i=0;i<array.length;i++){
    if(array[i]>largest){
        secondlargest=largest
        largest=array[i]
    }

}
console.log("second largest = ",secondlargest);
