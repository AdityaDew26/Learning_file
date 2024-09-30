/*Switch :
it is an selection statements
we an execute multiple or single block of statemnents based on value
syntax:

switch(value){
    case <value>:
        statement
        break;

}

it is used in value matching 

*/

switch (30) {
    case 5:
        console.log(5);
        break;

    case 10:
        console.log(10);
        break;

    case 15:
        console.log(15);
        break;

    default:
        console.log("no case mactch");
        break;

}