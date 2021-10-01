const library = document.querySelector('.library')
const addBookBtn = document.querySelector('.add-book')
const formContainer = document.querySelector('.form-container')
const form = document.querySelector('form')

let myLibrary = []

function Book(author,title,numPages,isRead){
    this.author = author
    this.title = title
    this.numPages = numPages
    this.isRead = isRead
}

const addBookToLibrary = book => myLibrary.push(book)

const renderLibrary = () => {
    while(library.firstChild){
        library.removeChild(library.lastChild)
    }
    myLibrary.forEach(book => {
        let renderedBook = document.createElement('div')
        let readMessage = book.isRead ? 'You have read this' : 'You have not read this'
        renderedBook.classList.toggle('card')
        if(book.isRead){renderedBook.classList.toggle('read')}
        renderedBook.textContent =
            `Title: ${book.title} \r\n Author: ${book.author} \r\n ${book.numPages} pages \r\n ${readMessage}`
        library.appendChild(renderedBook)
    })
}

formContainer.addEventListener('click',(e) => {
    if(e.target.classList.value == "form-container"){
        formContainer.style.display = "none"
    }
})


addBookBtn.addEventListener('click',(e) => {
    form.reset()
    formContainer.style.display = 'block'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let newBookTitle = document.querySelector('#title').value
    let newBookAuthor = document.querySelector('#author').value
    let newBookPagenum = document.querySelector('#pageNum').value
    let newBookHasRead = document.querySelector('#hasRead').value
    let newBook = new Book(newBookAuthor,newBookTitle,newBookPagenum,newBookHasRead)
    addBookToLibrary(newBook)
    renderLibrary()
    form.reset()
    formContainer.style.display = "none"
})

// // Test case
// let lotr = new Book('Tolkein','Lord of the Rings',120,true)
// let lotr2 = new Book('Salvator','Lord of the Things',1210,false)
// let lotr3 = new Book('Rowling','Lord of the Kings',12110,true)
// let lotr4 = new Book('Kingly','Lord of the Wings',130,false)
// let lotr5 = new Book('Kingly','Lord of the Wings',130,false)
// let lotr6 = new Book('Kingly','Lord of the Wings',130,false)
// let lotr7 = new Book('Kingly','Lord of the Wings',130,false)

// addBookToLibrary(lotr)
// addBookToLibrary(lotr2)
// addBookToLibrary(lotr3)
// addBookToLibrary(lotr4)
// addBookToLibrary(lotr5)
// addBookToLibrary(lotr6)
// addBookToLibrary(lotr7)