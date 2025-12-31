
function isVowelConsonants(word){
    let Vcount=0
    let Ccount=0
    
    for(ch of word){
        if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
            Vcount++
        }
        else{
            Ccount++
        }
    }
    console.log(`vowels = ${Vcount}`);
    console.log(`consonants = ${Ccount}`);
    
    
}

isVowelConsonants("goodmorning")

