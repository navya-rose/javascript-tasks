
function ispanagram(word){
    let pangramWord=true
    let alphabets = "abcdefghijklmnopqrstuvwxyz"
    
    for(ch of alphabets){
        if(word.indexOf(ch)==-1){
            pangramWord==false
        }
    }

    return pangramWord
}
console.log(ispanagram("the quick brown fox jumps over the lazy dog "));

