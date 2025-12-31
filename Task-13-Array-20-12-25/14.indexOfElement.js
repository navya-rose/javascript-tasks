
//Write a program to find the index of an element without using built-in index methods.

var array = [10,20,30,40,50]
var element = 30

for(i=0;i<array.length;i++){
    if(array[i]==element){
        console.log("index of element = ",i);
        
    }
}