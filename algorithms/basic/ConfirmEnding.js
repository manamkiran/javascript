function confirmEnding(str,target)
{
    return str.substr(-target.length) === target;
}

console.log(confirmEnding('Kiran','n'));


/**

if ('ab'.substr(-1) === 'b') {
   */
/**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  /**
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // call the original method
      return substr.call(this,
      	// did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length)
    }
  }(String.prototype.substr);
}

function confirmEnding(str,target)
{
    return str.substr(-target.length) === target;
}


console.log(confirmEnding('Kiran','n'));

var abc= function(str){
  console.log(" HI " + str);
  return function(abcd){
    console.log(abcd + " : " +str)
  }
};

abc("Hello abs")("Doubles");

var abcd= function(str){
  console.log(" HI " + str);
};

abcd("Yo");
*/