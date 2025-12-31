
function panagram(sentence){
    let pangramWord=true
    let alphabets="abcdefghijklmnopqrstuvwxyz"
    for(ch of alphabets){
        if(sentence.indexOf(ch)==-1){
            pangramWord=false
        }
    }
    return pangramWord
}
console.log(panagram("the quick brown fox jumps over the lazy dog"));
