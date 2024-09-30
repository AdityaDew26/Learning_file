/*create a function  which should designation of employee  */

function getDesignation(year) {
    if (year >= 0 && year <= 2) {
        console.log("it is junior Engineer");
    } else if (year > 2.1 && year <= 5) {
        console.log("it is Senior Engineeer");
    } else if (year > 5.1 && year <= 7) {
        console.log("it is Team Lead");
    } else if (year > 7.1 && year <= 9) {
        console.log("it is Manager");
    } else if (year > 9) {
        console.log("it is Software Architect");
    } else {
        return "add valid experience"
    }
}

var call = getDesignation(7);
console.log(call)