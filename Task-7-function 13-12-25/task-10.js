
function uppercase(sentence){
    let word = sentence.split(" ")
    let result =""
    for(let i=0;i<word.length;i++){
        let words = word[i]
        let capital = words[0].toUpperCase()+words.slice(1)
        result+=capital +" "
    }
    return result
}
console.log(uppercase("hello world"));
