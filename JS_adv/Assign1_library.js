let myLibrary = []
const container = document.getElementById("container")
const dialog = document.querySelector("dialog")
const addBtn = document.getElementById("addBtn")
//const clsBtn = document.querySelector("dialog button")
const bookForm = document.getElementById("bookForm")


function Book(name, author, pages, status){
    this.name = name;
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function(){
        return [this.name, this.author, this.pages, this.status]
    } 

}
//console.log(book1.info())

function addBookToLibrary(name, author, pages, status){    
   const new_book = new Book(name, author, pages, status)
   myLibrary.push(new_book)
}

function displayBooks() {
    myLibrary.forEach (book => {
        const book_info = book.info()
        const cardContainer = document.createElement("div")
        
        const title = document.createElement("h3")
        title.innerText = `Book Title: ${book_info[0]}`

        const author = document.createElement("p")
        author.innerText = `Author Name: ${book_info[1]}`

        const pages = document.createElement("p")
        pages.innerText = `Number of Pages: ${book_info[2]}`

        const status = document.createElement("p")
        status.innerText = `Reading Status: ${book_info[3]}`

        const dltBtn = document.createElement("button")
        dltBtn.setAttribute("id", )

        container.appendChild(cardContainer)
        cardContainer.setAttribute("class", "card")
        cardContainer.appendChild(title)
        cardContainer.appendChild(author)
        cardContainer.appendChild(pages)
        cardContainer.appendChild(status)

    })
}

addBtn.addEventListener("click", () => {
    dialog.showModal()
})
bookForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const inp_title = document.getElementById("title").value
    const inp_author = document.getElementById("author").value
    const inp_pages = document.getElementById("pages").value
    const inp_status = document.querySelector('input[name="status"]:checked')?.value;
    console.log(inp_title, inp_author, inp_pages, inp_status)

    addBookToLibrary(inp_title, inp_author, inp_pages, inp_status)
    dialog.close()
    displayBooks()
})

addBookToLibrary("A Kite Runner", "Khaled", "280", "Completed")
addBookToLibrary("The Litle Coffee Shop", "Deborah", "288", "Reading")
console.log(myLibrary)
//displayBooks()

