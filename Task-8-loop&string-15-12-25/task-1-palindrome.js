
function ispalindrome(string){
    let result="";
    for(i=string.length -1;i>=0;i--){
        result+=string[i]
    }
    if(string==result){
        console.log("palindrome");
        
    }
    else{
        console.log("not palindrome");
        
    }
}

ispalindrome("racecar")
ispalindrome("good morning")