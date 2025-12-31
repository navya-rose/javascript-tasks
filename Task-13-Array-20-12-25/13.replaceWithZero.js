
var array = [1,-1,2,-2,3,-3,4,-4]


for(i=0;i<array.length;i++){
    if(array[i]<0){
        array[i]=0
    }
}

console.log(array);
