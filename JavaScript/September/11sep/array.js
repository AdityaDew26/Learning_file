// Array : Array is a data structure. it used for store the array. Data stored in arrays is called elements
// how ro create array ? similler to objects "var users = [] "

var users = []

var productName = ["vivo 40", "iphone 16", "samsung galaxy s4 pro"];

// every elemnts in the array assigned with a unique number called index no. and its starts from 0 
// why index no starts its 0 ??

// we can perform operationd on array. JS is providing some pre-defined fucntion to us 
// ========================================================================================//
// Array Methods or Functions:
// PUSH() => it is used add new element  in the array in last position

var arr = [10, 20, 30, 40, 50];

arr.push("hyd");
console.log(arr);

arr.push(true);
console.log(arr);

arr.push(true, false);
console.log(arr);

// UNSHIFT() => it is used add new elements in the initial position 
arr.unshift("aditya", "abhigyat")
console.log(arr)

// pop()=> used to remove last element

arr.pop();
console.log(arr)

// shift()=> used to remove first element of array 
arr.shift()
console.log(arr)

// includes()=> it is ised to check the elements of an array or not . if elements is present then includes will return true. if elements is not present then includes will return false

var a = arr.includes(40);
console.log(a);

var a = arr.includes("aditya");
console.log(a);

// indexOf()=> it is used to index of elements
var b = arr.indexOf(30);
var c = arr.lastIndexOf(true)
console.log(b, c);