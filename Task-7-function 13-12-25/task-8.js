
function islongest(string){
   let stringsplit =string.split(" ")
   let longword=""
   for(let i=1;i<stringsplit.length;i++){
    if(stringsplit[i].length>longword.length){
        longword=stringsplit[i]
    }
   }
   return longword
}
console.log(islongest("I love programming"));

