function reverseString(str){

    return str.split('').reverse().join('');

}

function reverseStringForLoop(str){

    let newStr = '';
    for (let i = str.length; i >0; i--){
        newStr += str[i];
    }
    return newStr;
}



function reverseStringLambda(str){
    let strArray = [];
    str.split('').forEach( char => {
        strArray.unshift(char);    
    });
    return strArray.join('');
    

}

console.log(reverseString("Hello"));
console.log(reverseStringLambda("Hello"));