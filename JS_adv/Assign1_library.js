let myLibrary = []
const container = document.getElementById("container")
const dialog = document.querySelector("dialog")
const addBtn = document.getElementById("addBtn")
const clsBtn = document.getElementById("clsBtn")
const form = document.getElementById("bookForm")
let changeStat

function Book(name, author, pages, status){
    this.name = name;
    this.author = author
    this.pages = pages
    this.status = status
    this.bookID = Book.bookID++
    this.info = function(){
        return [this.name, this.author, this.pages, this.status, this.bookID]
    }
}
//console.log(book1.info())
Book.bookID = 1

function addBookToLibrary(name, author, pages, status){    
   const new_book = new Book(name, author, pages, status)
   myLibrary.push(new_book)
}

addBookToLibrary("A Kite Runner", "Khaled", "280", true)
addBookToLibrary("The Litle Coffee Shop", "Deborah", "288", false)
showLibrary()


function showLibrary() {
    container.innerHTML = " "
    myLibrary.forEach(book => {
        const cardContainer = document.createElement("div")

        const createChild = (tag, content) => {
            const contentTag = document.createElement(tag)
            contentTag.innerText = content
            cardContainer.appendChild(contentTag)
        }

        let readStatus

        if(book.status){
            readStatus = "Read"
        } else{
            readStatus = "Not Read"
        }


        createChild("h1", book.name)
        createChild("h3", book.author)
        createChild("p", `Number of pages: ${book.pages}`)
        createChild("p", `Reading status: ${readStatus}`)
        

        changeStat = document.createElement("button")
        changeStat.setAttribute("class", "Button")
        changeStat.setAttribute("id", book.bookID)
        changeStat.innerText = "Change Status"
        changeStat.addEventListener("click", (event) => {
            console.log(event.target)
            myLibrary.forEach(book  => {
                if (book.bookID === parseInt(event.target.id)) {
                    if( book.status) {
                        book.status = false
                    } else {
                        book.status = true
                    }
                }
            })
            showLibrary()
        })


        const dltBtn = document.createElement("button")
        dltBtn.setAttribute("id", book.bookID)
        dltBtn.setAttribute("class", "Button")
        dltBtn.innerText = "Remove Book"
        dltBtn.addEventListener("click", (event) => {
             myLibrary = myLibrary.filter(b => b.bookID !== parseInt(event.target.id))
             showLibrary()
        })


        container.appendChild(cardContainer)
        cardContainer.setAttribute("class", "card")
        cardContainer.appendChild(changeStat)
        cardContainer.appendChild(dltBtn)
    })
}

addBtn.addEventListener("click", () => {
    dialog.showModal()
})

clsBtn.addEventListener("click", (event)=> {
    event.preventDefault()
    dialog.close()
})


bookForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const inp_title = document.getElementById("title").value
    const inp_author = document.getElementById("author").value
    const inp_pages = document.getElementById("pages").value
    const inp_status = document.querySelector('input[name="status"]:checked')?.value || false;
    console.log(inp_title, inp_author, inp_pages, inp_status)
    addBookToLibrary(inp_title, inp_author, inp_pages, inp_status)
    showLibrary()
    form.reset()
    dialog.close()
})


console.log(myLibrary)
//displayBooks()

