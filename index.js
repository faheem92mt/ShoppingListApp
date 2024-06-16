// importing the method uesed to initialize the app
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import the 'getDatabase'
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// defining our app settings
const appSettings = {
    databaseURL: "https://playground-c1998-default-rtdb.firebaseio.com/"
}

// defining our app
const app = initializeApp(appSettings)

console.log(app);

// import {add} from "./functions.js"
// console.log(add(1,1));

var button = document.querySelector("button")
var input = document.querySelector("input")

const print = ()=> {
    console.log(input.value);
}

button.addEventListener("click", print)