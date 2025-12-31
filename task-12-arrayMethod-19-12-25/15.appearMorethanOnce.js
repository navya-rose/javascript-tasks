
//Given the array [1, 3, 5, 3, 7, 3], check whether the number 3 appears more than once.

var array = [1, 3, 5, 3, 7, 3]
if(array.indexOf(3)!=array.lastIndexOf(3)){
    console.log("3 appear more than once");
    
}
else{
    console.log("3 does not appear more than 3");
    
}