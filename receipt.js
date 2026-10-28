
var name = localStorage.getItem("name");
var books = JSON.parse(localStorage.getItem("books"));

var receipt = document.getElementById("receipt");

receipt.innerHTML = "<p>Name: " + name + "</p>";
receipt.innerHTML += "<p>Books:</p>";

for (var i = 0; i < books.length; i++) {
    receipt.innerHTML += "<p>" + books[i] + "</p>";
}

var total = books.length * 200;

receipt.innerHTML += "<p>Total Deposit: " + total + " Taka</p>";

function goBack() {
    window.location.href = "index.html";
}
