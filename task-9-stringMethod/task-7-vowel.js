
function vowel(string){
    let result = ""
    for( ch of string){
        if(ch=="a"||ch=="e"||ch=="o"||ch=="i"||ch=="u"){
              result+="*"
        }
        else{
            result+=string[i]
        }   
        
    }
    return result
}
console.log(vowel("good morning"));
