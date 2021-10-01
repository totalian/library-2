const library = document.querySelector('.library')

let myLibrary = []

function Book(author,title,numPages,isRead){
    this.author = author
    this.title = title
    this.numPages = numPages
    this.isRead = isRead
}

const addBookToLibrary = book => myLibrary.push(book)

const renderLibrary = () => {
    myLibrary.forEach(book => {
        let renderedBook = document.createElement('div')
        let readMessage = book.isRead ? 'You have read this' : 'You have not read this'
        renderedBook.classList.toggle('card')
        renderedBook.textContent =
            `Title: ${book.title} \r\n Author: ${book.author} \r\n ${book.numPages} pages \r\n ${readMessage}`
        library.appendChild(renderedBook)
    })
}

// Test case
let lotr = new Book('Tolkein','Lord of the Rings',120,true)
let lotr2 = new Book('Salvator','Lord of the Things',1210,false)
let lotr3 = new Book('Rowling','Lord of the Kings',12110,true)
let lotr4 = new Book('Kingly','Lord of the Wings',130,false)
let lotr5 = new Book('Kingly','Lord of the Wings',130,false)
let lotr6 = new Book('Kingly','Lord of the Wings',130,false)
let lotr7 = new Book('Kingly','Lord of the Wings',130,false)

addBookToLibrary(lotr)
addBookToLibrary(lotr2)
addBookToLibrary(lotr3)
addBookToLibrary(lotr4)
addBookToLibrary(lotr5)
addBookToLibrary(lotr6)
addBookToLibrary(lotr7)