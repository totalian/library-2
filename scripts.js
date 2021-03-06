const library = document.querySelector('.library')
const addBookBtn = document.querySelector('.add-book')
const formContainer = document.querySelector('.form-container')
const form = document.querySelector('form')

let myLibrary = localStorage.myLibrary ? JSON.parse(localStorage.myLibrary) : []

// function Book(author,title,numPages,isRead){
//     this.author = author
//     this.title = title
//     this.numPages = numPages
//     this.isRead = isRead
// }

class Book {
    constructor(author,title,numPages,isRead){
        this.author = author
        this.title = title
        this.numPages = numPages
        this.isRead = isRead
    }
}

const addBookToLibrary = book => myLibrary.push(book)

const renderLibrary = () => {
    while(library.firstChild){
        library.removeChild(library.lastChild)
    }
    myLibrary.forEach((book,index) => {
        let renderedBook = document.createElement('div')
        let readMessage = book.isRead ? 'You have read this' : 'You have not read this'
        let removeButton = document.createElement('button')
        removeButton.textContent = "Remove"
        let toggleReadButton = document.createElement('button')
        toggleReadButton.textContent = "Change read"
        renderedBook.classList.toggle('card')
        if(book.isRead){renderedBook.classList.toggle('read')}
        renderedBook.textContent =
            `Title: ${book.title} \r\n Author: ${book.author} \r\n ${book.numPages} pages \r\n ${readMessage}`
        renderedBook.appendChild(toggleReadButton)
        renderedBook.appendChild(removeButton)
        renderedBook.dataset.indexNumber = index
        library.appendChild(renderedBook)

        removeButton.addEventListener('click', () => {
            myLibrary.splice(index,1)
            renderLibrary()
        })

        toggleReadButton.addEventListener('click', () => {
            book.isRead = !book.isRead
            renderLibrary()
        })
    })
    localStorage.setItem('myLibrary',JSON.stringify(myLibrary))
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
    let newBookHasRead = document.querySelector('#hasRead').checked == true
    let newBook = new Book(newBookAuthor,newBookTitle,newBookPagenum,newBookHasRead)
    console.log(newBook)
    addBookToLibrary(newBook)
    renderLibrary()
    form.reset()
    formContainer.style.display = "none"
})

renderLibrary()