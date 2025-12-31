
function ispalindromeWord(word) {
    let newtext = word.toLowerCase().replaceAll(" ", "");
    console.log(newtext);

    let result = ""
    for (i = newtext.length - 1; i >=0; i--) {
        result += newtext[i]
    }
    return result == newtext


}

console.log(ispalindromeWord("A MAN A plan a canal panama"));
