// Return statment function

function f1() {
    var val1 = 30;
    var val2 = 40;

    var result = val1 + val2;
    console.log(result);
    return true;

}
var i = f1()
console.log(i)
    // ---------------------------------------------------------------------------------------//


function f2(f) {
    console.log("Calculation of two no");
    f();
    console.log("---------------------------------------");
}

f2(f1);
f2(function f3() {
    var x = 24;
    var y = 25;
    z = x * y;
    console.log(z);
});