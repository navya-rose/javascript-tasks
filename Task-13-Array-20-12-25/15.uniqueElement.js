
//15. Given an array of numbers, check whether all elements are unique.

var array = [10,20,30,40,50]
var isunique=true

for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            isunique=false
            break
        }
    }
}
if(isunique){
    console.log("all elements are unique.");
    
}
else{
    console.log("all elements are not unique.");
    
}

