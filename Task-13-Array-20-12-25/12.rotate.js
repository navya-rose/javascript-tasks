
var array =[10,20,30,40,50]
var rotate =array[array.length-1]
var result = []

for(i=array.length-1;i>0;i--){
    result[i]=array[i-1]
}
result[0]=rotate

console.log(result);
