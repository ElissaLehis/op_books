class UI {
    constructor() {
        this.title = document.querySelector('#title')
        this.author = document.querySelector('#author')
        this.isbn = document.querySelector('#isbn')
        this.bookList = document.querySelector('#book-list')
    }
    addBook(book){
        const tr = document.createElement('tr')
        const trContent = <td>${title}</td>
                          <td>${author}</td>
                          <td>${isbn}</td>
                          <td><a href="#">X</a></td>
        this.bookList.appendChild(tr)


    }
}