
var word = "ABC123"
var challengeCode="7YZ"

//append challenge code with code

var newtext=word.concat(challengeCode)
console.log(newtext);

let maskedstring =""
let count = 1
for(i=0;i<=newtext.length;i++){
    if(count==3){    //(i+1)%3==0
        maskedstring+="X"
        count=0
    }
    else{
        maskedstring+=newtext[i]
    }
    count++
}
console.log(maskedstring);

