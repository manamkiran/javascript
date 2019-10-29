function seekAndDestroy(arr, arr1){
    console.log(arr1);
      return arr.filter( e => !arr1.includes(e) );
  }
  
  console.log(seekAndDestroy([1,4,3,2,5,6,7,8,9],[2,3,4]));
  

  function seekAndDestroyPrototype(arr, arr1){
    console.log(arr1);
      return arr.filter( e => !Array.prototype.includes.call(arr1,e) );
  }
  
  console.log(seekAndDestroyPrototype([1,4,3,2,5,6,7,8,9],[2,3,4]));
  