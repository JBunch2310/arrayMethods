// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]
// shoppingList[0] // returns celery

//array push()
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"]
// shoppingList.push("salt")
//shoppingList is now ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]

//Array.pop() → removes the last element in the array and returns that element.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// shoppingList.pop("salt")
//shoppingList is now ["celery", "limes", "lemons", "grenadine", "oranges"]

//Array.unshift() → adds a new element at the beginning of the array.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// shoppingList.unshift("kiwi")
//shoppingList is now ["kiwi", "celery", "limes", "lemons", "grenadine", "oranges", "salt"]

//Array.shift() → removes the first element in an array and returns that element.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// shoppingList.shift()
//shoppingList is now ["limes", "lemons", "grenadine", "oranges", "salt"]

//Array.forEach() → calls a function once for each element in the array.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// shoppingList.forEach((item) => console.log(`${item}`));
// answer:
// celery
// limes
// lemons
// grenadine
// oranges
// salt

// Array.map() → transforms the elements in the original array by calling the given function once for each element in the array.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// console.log (shoppingList.map((item) => item.toUpperCase()));
// answer: [ 'CELERY', 'LIMES', 'LEMONS', 'GRENADINE', 'ORANGES', 'SALT' ]

//Array.filter() → creates a new array with only the elements that pass the test in a given function.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// console.log (shoppingList.filter((item) => item.toUpperCase()));
//answer:[ 'celery', 'limes', 'lemons', 'grenadine', 'oranges', 'salt' ]

//Array.find() → returns the first element in an array that passes a test given as a function.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// console.log (shoppingList.find((item) => item.toUpperCase()));
//answer: celery

//Array.reduce() → executes a given function for each value of the array and returns a single value.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// console.log (shoppingList.reduce((item) => item.toUpperCase()));
//answer: CELERY

//Array.includes() → determines whether an array has a specific element.
// let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"]
// shoppingList.includes("oranges")
//answer is true

//Array.indexOf() → search the array for a specific element and returns its first index.
// const shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"];
// let index = shoppingList.indexOf("limes", [0]);
// console.log(index)
//answer: 1

//Array.findIndex() → returns the index of the first element in an array that passes the test in a given function.
// const shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"];
// console.log(shoppingList.findIndex((fruit) => fruit === "limes"))
// answer: 1



//Array.every() → checks if all elements in an array pass a test given as a function
// const shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges", "salt"];
// console.log(shoppingList.every((fruit) => fruit === "limes"))
//answer: False


// console.log(shoppingList)