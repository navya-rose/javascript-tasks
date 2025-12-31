
var array =[1,2,3,4,5]
var issorted =true

for(i=0;i<array.length;i++){
    if(array[i]>array[i+1]){
        issorted=false
    }
}
if(issorted){
    console.log("array is sorted");
    
}
else{
    console.log("array is not sorted");
    
}
