
var color = ["yellow","green","red","yellow","white","green","purple","white"]
var colorCount={}

for(let c of color){

   if(c in colorCount){
    colorCount[c]+=1  //update
   }
   else{
    colorCount[c]=1 
   }
}
console.log(colorCount);
