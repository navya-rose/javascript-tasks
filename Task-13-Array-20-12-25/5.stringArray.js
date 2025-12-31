
//Given an array of strings, display the string with the maximum length.

var array =["apple","banana","jackfruit","mango","watermelon"]
let maxLegth = [0]
for(let ch of array){
    if(ch.length>maxLegth.length){
        maxLegth=ch
    }
}
console.log(maxLegth);
