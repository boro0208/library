let myLibrary = [];
const divContent = document.querySelector(".content");

function Book(title,author,status) {
  this.title = title,
  this.author = author,
  this.status = status
}

function addBookToLibrary(title,author,status) {
    var p = new Book(title,author,status);
    myLibrary.push(p);
}

function getBooks(){
    myLibrary.forEach(item => {
        const divBook = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const button = document.createElement("button");

        divBook.classList.add("book");
        img.src = "img/default_book_cover_2015.jpg";
        divBook.appendChild(img);
        h3.textContent = item.title;
        p.textContent = item.author;
        button.textContent = item.status;

        divBook.appendChild(h3);
        divBook.appendChild(p);
        divBook.appendChild(button);
        divContent.appendChild(divBook);
    });
}

document.querySelector(".addBook").addEventListener("click", function() {
    addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('status').value); 
    document.getElementById("myForm").reset();
    
    document.getElementById("content").innerHTML = "";
    getBooks();
});