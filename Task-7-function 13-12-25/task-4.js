
function reverse(word){
    let reverseword =""
    for(i=word.length-1;i>=0;i--){
        reverseword=reverseword + word[i]
    }
    return reverseword
}
console.log(reverse("hello"));
