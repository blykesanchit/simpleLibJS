function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display(bk) {
    console.log("hola");
}

//adding new properties/methods to Display constructor
Display.prototype.add = function (bk) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
    <td>${bk.name}</td>
    <td>${bk.author}</td>
    <td>@${bk.type}</td>
  </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    libraryForm.reset();
}

Display.prototype.validate = function (bk) {
    if (bk.name < 2 || bk.author < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.showMsg = function (type, msg) {
    // type=type.ToLowerCase();
    let msgBox = document.getElementById("msgBox");
    msgBox.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
}


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", function libraryFormSubmit(e) {
    e.preventDefault();//prevent he reloading of page after you press the submit button
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.showMsg('success', 'book added.');
    }
    else {
        display.showMsg('warning', 'cannot add book.');
    }

    console.log(book.name);
});


