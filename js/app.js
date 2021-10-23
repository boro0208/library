// let myLibrary = [];
let myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");
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
    document.getElementById("content").innerHTML = "";
    myLibrary.forEach(item => {
        const divBook = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const button = document.createElement("button");
        const buttonDelete = document.createElement("button");

        divBook.classList.add("book");
        img.src = "img/default_book_cover_2015.jpg";
        divBook.appendChild(img);
        h3.textContent = item.title;
        p.textContent = item.author;
        button.textContent = item.status;
        button.classList.add("status");
        if(item.status === "NOT READ"){
            button.classList.add("not-read");
        }
        button.setAttribute("id",myLibrary.indexOf(item));
        button.setAttribute("type","button");
        buttonDelete.textContent = "DELETE";
        buttonDelete.classList.add("delete");
        buttonDelete.dataset.id = myLibrary.indexOf(item);

        divBook.appendChild(h3);
        divBook.appendChild(p);
        divBook.appendChild(button);
        divBook.appendChild(buttonDelete);
        divContent.appendChild(divBook);
    });
    changeStatus();
    deleteBook();
}
function changeStatus(){
    const buttons = document.querySelectorAll('.status');
    buttons.forEach(item => {
        item.addEventListener("click",function () {      
            const inputVal = document.getElementById(item.id).textContent;
            (inputVal === "READ") ? myLibrary[item.id].status = "NOT READ" : myLibrary[item.id].status = "READ";
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            getBooks();
        });
    });
}
function deleteBook(){
    const btnDelete = document.querySelectorAll('.delete');
    btnDelete.forEach(item => {
        item.addEventListener("click",function () {      
            // const id = item.getAttribute('data-id');
            myLibrary.splice(item.getAttribute('data-id'), 1);
            localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
            getBooks();
        });
    });
}

document.querySelector(".addBook").addEventListener("click", function() {
    addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('status').value); 
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    document.getElementById("myForm").reset();
    
    getBooks();
});

document.addEventListener("DOMContentLoaded", function(){
    getBooks();
});