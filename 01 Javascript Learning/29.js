// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]); //by using this method you can add other arrays or combine two arrays together
// let array2 = [].concat(array1,["item3", "item4"]); //this method can also be used in combining the arrays
// new way 
// spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];
let array2 = [...array1, "item3", "item4"];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
console.log(array2)
