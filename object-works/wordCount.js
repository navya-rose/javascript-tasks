
var text = "this is a javascript program this javascript program is simple"

var textSplit =text.split(" ") //["this","is",.....]

var wordCount ={}

for(let w of textSplit){
    if(w in wordCount){
        wordCount[w]+=1
    }
    else{
        wordCount[w]=1
    }
}
console.log(wordCount);
