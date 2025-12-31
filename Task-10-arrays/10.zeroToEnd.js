
var number=[1,0,2,0,3]
let newarray = []
let zeros = 0
for(i=0;i<number.length;i++){
    if(number[i]!=0){
        newarray.push(number[i])
    }
    else{
        zeros++
    }
    
}
for(i=0;i<zeros;i++){
    newarray.push(0)
}
console.log(newarray);
