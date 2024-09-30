// forEach()
var arr = [10, 20, 30];

var NewArray = arr.forEach(function(element, index) {
    console.log(element, index)
})

console.log(NewArray);

console.log("-----------------------------------------------------------------------------------")
    // map()
var NewArray = arr.map(function(element, index) {
    var result = element * 10;
    return result;
})

console.log(NewArray);

// map() has an return statement

console.log("-----------------------------------------------------------------------------------")
    // filter()
var NewArray = arr.filter(function(element, index) {

    return element > 10;
});

console.log(NewArray);