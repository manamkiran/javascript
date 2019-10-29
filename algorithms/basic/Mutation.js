function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every( letter => arr[0].toLowerCase().indexOf(letter) !== -1);
}

console.log(mutation(['Hello','hello']));
console.log(mutation(['Hello','yellow']));
console.log(mutation(['Hello','hell']));
console.log(mutation(['Hello','Ole']));

/*
.map() returns a new Array of objects created by taking some action on the original item.

.every() returns a boolean - true if every element in this array satisfies the provided testing function. An important difference with .every() is that the test function may not always be called for every element in the array. Once the testing function returns false for any element, no more array elements are iterated. Therefore, the testing function should usually have no side effects.

.forEach() returns nothing - It iterates the Array performing a given action for each item in the Array.
*/