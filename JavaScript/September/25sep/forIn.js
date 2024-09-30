/*
for in :
it is used to iterate through object Properties

*/


var obj = {
    name: "s1",
    city: "c1",
    gender: "g1"
};

var v = obj.name

for (let x in obj) {

    console.log(obj[x]);
}