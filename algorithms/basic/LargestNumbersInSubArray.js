function largestOfTheSubArray(arr){

    return arr.map( group => 
        group.reduce( (max, cur) => 
            Math.max(max,cur)
        )
    );
}

function largestOfTheSubArrayMathmax(arr){
    return arr.map( Function.apply.bind(Math.max,null) );
    /* Function.apply.bind(Math.max,null) 
        is equivalent to 
        Math.max.apply(null) 
        Math.max.apply(null, arguments) additional arguments are passed to the callback
    */
}


function largestOfTheSubArrayDestruction(arr){
    return arr.map( group => Math.max(...group) );
    /* Function.apply.bind(Math.max,null) 
        is equivalent to 
        Math.max.apply(null) 
        Math.max.apply(null, arguments) additional arguments are passed to the callback
    */
}


console.log(largestOfTheSubArray(
    [
        [43,23,65,344],
        [433,423,665,3344],
        [431,233,655,344],
        [143,123,465,344],
        [943,723,656,344]
    ]
));

console.log(largestOfTheSubArrayMathmax(
    [
        [43,23,65,344],
        [433,423,665,3344],
        [431,233,655,344],
        [143,123,465,344],
        [943,723,656,344]
    ]
));

console.log(largestOfTheSubArrayDestruction(
    [
        [43,23,65,344],
        [433,423,665,3344],
        [431,233,655,344],
        [143,123,465,344],
        [943,723,656,344]
    ]
));