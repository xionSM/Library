let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.haveRead = function () {
        if (this.read === true) {
            this.read = false
        } else if (this.read === false) {
            this.read = true
        } else {

        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", false)
const aTaleOfTwoCities = new Book("A Tale of Two Cities", "Charles Dickens", "304 pages", false)
const donQuijote = new Book("Don Quijote", "Miguel de Cervantes", "880 pages", true)

myLibrary.push(theHobbit)
myLibrary.push(aTaleOfTwoCities)
myLibrary.push(donQuijote)

let body = document.querySelector("body")
function addBooksToLibrary() { // Loops through the array of myLibrary and adds the books on the table //
    
    for(let a = 0; a < myLibrary.length; a++){
        
        let tableBody = document.querySelector("tbody")
        let tableRow = document.createElement("tr")
        tableBody.appendChild(tableRow)
        
        let tableCell = document.createElement("td")
        tableCell.innerText = myLibrary[a].name 
        tableBody.lastChild.appendChild(tableCell)

        let tableCell2 = document.createElement("td")
        tableCell2.innerText = myLibrary[a].author
        tableBody.lastChild.appendChild(tableCell2)
        
        let tableCell3 = document.createElement("td")
        tableCell3.innerText = myLibrary[a].pages
        tableBody.lastChild.appendChild(tableCell3)

        let tableCell4 = document.createElement("td")
        tableCell4.classList.add("readCell")
        let divCell = document.createElement("div")
        divCell.innerText = myLibrary[a].read
        tableCell4.appendChild(divCell)
        tableBody.lastChild.appendChild(tableCell4)
        
        let readBtn = document.createElement("button")
        readBtn.classList.add("readBtn")
        if (tableCell4.innerText === "true") {
            readBtn.style.backgroundColor = "green"
        } else if (tableCell4.innerText === "false") {
            readBtn.style.backgroundColor = "red"
        } else {

        }
        tableCell4.appendChild(readBtn)
        let removeBook = document.createElement("button")
        removeBook.innerText = "Remove"
        removeBook.classList.add("removeBook")
        removeBook.addEventListener("click", (e) => { // Removes books from myLibrary array and the table
            removeBook.parentNode.parentNode.remove()
            let removeButtons = document.getElementsByClassName("removeBook")
            myLibrary.splice(removeButtons.length, 1)
        })
        let tableCell5 = document.createElement("td")
        tableBody.lastChild.appendChild(tableCell5)
        tableCell5.appendChild(removeBook)
    }

}

addBooksToLibrary()

const readButtons = document.getElementsByClassName("readBtn")
const form = document.querySelector("#newForm")
const subButton = document.querySelector("#submitButton")

function read() { // Adds an event listener to every read button to change the read status of each book on the table
    for (let r = 0; r < readButtons.length; r++) {
        readButtons[r].addEventListener("click", (e) => {
            myLibrary[r].haveRead()
            if (e.target.offsetParent.firstChild.textContent === "false"){
                        e.target.offsetParent.firstChild.textContent = "true"
                        e.target.style.backgroundColor = "green"
                        return
                    } else if (e.target.offsetParent.firstChild.textContent === "true") {
                        e.target.offsetParent.firstChild.textContent = "false"
                        e.target.style.backgroundColor = "red"
                        return
                    } else {
        
                    }
        })
    }
}



read();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(form)
})

form.addEventListener("formdata", (e) => { 
    let data = e.formData;
    let bookArray = [];
    for(let v of data.values()){ // pushes the values of the form data into the empty array
        bookArray.push(v)
    }
    if(bookArray[3] === "true") {
        bookArray[3] = true
    } else if (bookArray[3] === "false") {
        bookArray[3] = false
    } else {
        
    }
    let bookToAdd = new Book(bookArray[0], bookArray[1], bookArray[2], bookArray[3]) // makes the array elements into an object and pushes it into myLibrary
    myLibrary.push(bookToAdd)

    for(let i = 0; i < 1; i++) { // Creates the table row and button for the book
        let tableBody = document.querySelector("tbody")
        let tableRow = document.createElement("tr")
        tableBody.appendChild(tableRow)
        
        let tableCell = document.createElement("td")
        tableCell.innerText = bookToAdd.name 
        tableBody.lastChild.appendChild(tableCell)

        let tableCell2 = document.createElement("td")
        tableCell2.innerText = bookToAdd.author
        tableBody.lastChild.appendChild(tableCell2)
        
        let tableCell3 = document.createElement("td")
        tableCell3.innerText = bookToAdd.pages
        tableBody.lastChild.appendChild(tableCell3)

        let tableCell4 = document.createElement("td")
        tableCell4.classList.add("readCell")
        let divCell = document.createElement("div")
        divCell.innerText = bookToAdd.read
        tableCell4.appendChild(divCell)
        tableBody.lastChild.appendChild(tableCell4)
        
        let readBtn = document.createElement("button")
        readBtn.classList.add("readBtn")
        if (tableCell4.innerText === "true") {
            readBtn.style.backgroundColor = "green"
        } else if (tableCell4.innerText === "false") {
            readBtn.style.backgroundColor = "red"
        } else {

        }
        tableCell4.appendChild(readBtn)
        readBtn.addEventListener("click", (e) => {
            let rbContainer = Array.from(readButtons)
            myLibrary[rbContainer.length - 1].haveRead()

            if (e.target.offsetParent.firstChild.textContent === "false"){
                e.target.offsetParent.firstChild.textContent = "true"
                e.target.style.backgroundColor = "green"
                return
            } else if (e.target.offsetParent.firstChild.textContent === "true") {
                e.target.offsetParent.firstChild.textContent = "false"
                e.target.style.backgroundColor = "red"
                return
            } else {

            }
            
        })
        
        let removeBook = document.createElement("button")
        removeBook.innerText = "Remove"
        removeBook.classList.add("removeBook")
        removeBook.addEventListener("click", (e) => { // Removes books from myLibrary array and the table
            removeBook.parentNode.parentNode.remove()
            let removeButtons = document.getElementsByClassName("removeBook")
            myLibrary.splice(removeButtons.length, 1)
        })
        let tableCell5 = document.createElement("td")
        tableBody.lastChild.appendChild(tableCell5)
        tableCell5.appendChild(removeBook)
    }
    bookArray = [];

    container.style.display = "none"
    let inputs = document.querySelectorAll("input")
    inputs[0].value = ""
    inputs[1].value = ""
    inputs[2].value = ""
})

const newBookButton = document.querySelector(".newBook")
const container = document.querySelector(".container")
container.style.display = "none";

newBookButton.addEventListener("click", () => {
    container.style.display = "block";
})