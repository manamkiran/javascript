function falsyBouncer(arr){
    return arr.filter(Boolean);
}

console.log(falsyBouncer([0,1,2,3,"",null , 4,5,'',NaN,6,undefined,7,8,false,9]));