//copy-pasteda book projektist kõik tehtud töö siia - vaata hiljem anna gitist

//app objects
const ui = new UI()


//user input form
const form = document.querySelector('form')
form.addEventListener('submit', addBook)

//add book function
function addBook(event) {
//get form submit value from form input
    const titleInput = document.querySelector('#titleInput').value
    const authorInput = document.querySelector('#authorInput').value
    const isbnInput = document.querySelector('#isbnInput').value
//create book object with user data
    const book = new Book(tite, author, isbn)

// add book data to ui and show it
    ui.addBook(book)

//clear form input value
    document.querySelector('#titleInput').value = ''
    document.querySelector('#authorInput').value = ''
    document.querySelector('#isbnInput').value = ''
    event.preventDefault()
}