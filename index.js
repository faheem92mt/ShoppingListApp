const appSettings = {
    databaseURL: "https://playground-c1998-default-rtdb.firebaseio.com/"
}

import {add} from "./functions.js"

console.log(add(1,1));

var button = document.querySelector("button")
var input = document.querySelector("input")

const print = ()=> {
    console.log(input.value);
}

button.addEventListener("click", print)