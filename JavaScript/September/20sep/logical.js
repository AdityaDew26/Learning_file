/*
Logical operators
    AND : &&
    OR : ||
    NOT : !

    logical operators are used to compare two boolean values
    Logical operator compare boolean value where as reational operator compare values

*/

/*And Operator 
true && true ===> true
true && false ====> false 
false && true ====> false
false && false ====> false

OR Operator
true && true ===> true
true && false ====> true 
false && true ====> false
false && false ====> false

NOT 
!true = false
!false = true
*/


// program
var x = 10;
var y = 20;
var z = 30;

var result = x > y && y > z;
console.log(result);