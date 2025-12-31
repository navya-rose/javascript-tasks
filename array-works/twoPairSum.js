
//two pair sum =8

var arr=[1,2,3,4,5,6,]

var target = 9
var sum =0
for(let i of arr){
     for(let j of arr){
        let sum =i+j
        if(sum==target){
            console.log(i,j);
            
        }
     }
}