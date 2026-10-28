
var books = [];

function addBook() {
    var book = document.getElementById("book").value;

    if (book == "") {
        alert("Please enter a book title.");
        return;
    }

    if (books.length >= 3) {
        alert("You can borrow a maximum of 3 books.");
        return;
    }

    books.push(book);

    document.getElementById("book").value = "";

    alert("Book Added");
}

function confirmBorrow() {
    var name = document.getElementById("studentName").value;

    if (name == "" || books.length == 0) {
        alert("Please enter your name and add a book.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("books", JSON.stringify(books));

    window.location.href = "receipt.html";
}
