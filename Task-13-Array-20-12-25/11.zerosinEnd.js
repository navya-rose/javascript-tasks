
var array =[1,0,2,0,3,0];
var result = [];
var zeros =0;
for(let i=0;i<array.length;i++){
    if(array[i]!=0){
        result.push(array[i]);
    }
    else{
       zeros++
    }
}
for(i=0;i<zeros;i++){
    result.push(0);
}
console.log(result);
