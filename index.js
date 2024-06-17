// importing the method uesed to initialize the app
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import the 'getDatabase'
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// defining our app settings
const appSettings = {
    databaseURL: "https://realtime-database-4506c-default-rtdb.firebaseio.com/"
}

// defining our app
const app = initializeApp(appSettings)
// defining our database
const database = getDatabase(app)
// creating our references
const foodInDB = ref(database, "food")
// const booksInDb = ref(database, "books")

// fetching data from DB - this function runs everytime there is an edit to the database
onValue(foodInDB, (snapshot) => {
    // converting object to array
    let foodArray = Object.entries(snapshot.val())

    // we clear existing list everytime there is an edit to the db
    clearList()

    for (let i = 0; i < foodArray.length; i++) {
        let currentItem = foodArray[i];
        addToList(currentItem)
    }
})

// console.log(app);

// import {add} from "./functions.js"
// console.log(add(1,1));

var button = document.querySelector("button")
var input = document.querySelector("input")
var ul = document.getElementById('shopping-list')


button.addEventListener("click", ()=> {
    // temporary holder variable
    let inputValue = input.value

    // pushing to DB
    push(foodInDB,inputValue)

    // addToList(inputValue)
    emptyInputField()

    console.log(`${inputValue} added to database`);
})





const emptyInputField = () => {
    input.value = ''
}

const clearList = () => {
    ul.innerHTML = ""
}

const addToList = (currentItem) => {

    let currentItemId = currentItem[0]
    let currentItemValue = currentItem[1]

    // creating a new 'li' and changing its value &...
    var newListItem = document.createElement('li')
    newListItem.textContent = currentItemValue

    newListItem.addEventListener("click", () => {
        let exactLocationOfFoodItem = ref(database, `food/${currentItemId}`)
        remove(exactLocationOfFoodItem)
    })

    //...appending it
    ul.appendChild(newListItem)

}