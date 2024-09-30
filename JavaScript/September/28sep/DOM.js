/*
How to change the content of any html document?
1. get that DOM element on which you want to perform the action

how to get DOM element in javascript?
using tag name:

var DOM = document.querySelector("tagname")

*/

function fn() {
    var DOM = document.querySelector('h2');


    var pDOM = document.querySelector('p');
    var bDOM = document.querySelector('button')



    DOM.innerText = "Document object Model";
    pDOM.innerText = "JS is Super Easy";
    bDOM.innerText = "logout"
}