var button = document.querySelector("button")
var input = document.querySelector("input")

const print = ()=> {
    console.log(input.value);
}

button.addEventListener("click", print)