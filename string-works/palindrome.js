
function ispalindrome(text){
    let ispword = true
     let result =""
     for(i=text.length-1;i>0;i--){
        result+=text[i]
     }
     if(text!=result){
        ispword=false
     }


    return ispword
}
console.log(ispalindrome("center"));
