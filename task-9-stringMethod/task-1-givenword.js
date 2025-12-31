
function itContains(str,text){
     return str.toLowerCase().includes(text.toLowerCase())
     
    
}
       
       let string = "i love you"
       let word = "love"

    if(itContains(string,word)){
           console.log(`the word is found in string`);
           
    }
    else{
        console.log(`the word is not found in the string`);
        
    }




