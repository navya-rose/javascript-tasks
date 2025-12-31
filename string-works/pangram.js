 
 //pangram
 
 var word = "the quick brown fox jumps over the lazy dog"

 let alphabets="abcdefghijklmnopqrstuvwxyz"
 
 let ispanagram=true

 for(let ch of alphabets){

       if(word.indexOf(ch)==-1){
        ispanagram= false
        break
       }
 }

console.log(ispanagram);

    
