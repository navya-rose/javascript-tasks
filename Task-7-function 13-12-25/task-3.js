
function vowel(word){
    let vowalCount = 0
    for(ch of word){
        if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
            vowalCount++
        }
    }
    return vowalCount
}
console.log(vowel("javascript"));
