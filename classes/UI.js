class UI {
    addBook(book){
        const tr = document.createElement('tr')
        const trContent = <td>${title}</td>
                          <td>${author}</td>
                          <td>${isbn}</td>
                          <td><a href="#">X</a></td>
        tr.innerHTML = trContent
        const bookList = document.querySelector('#book-list')
        bookList.appendChild(tr)
    }
}