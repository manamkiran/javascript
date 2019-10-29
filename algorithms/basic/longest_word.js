function longestWord(str){
    var words = str.split(' ');
    var maxLength = -1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength)
        {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}

function longestWord_intermediate(str){
    return str.split(' ').reduce((x,y) => {
        return Math.max(x,y.length);
    },0);
}

console.log(longestWord("Hi This is kiran manam"));
console.log(longestWord_intermediate("Hi This is kiran manam"));