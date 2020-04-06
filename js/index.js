var button = document.getElementById("add_to_list");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var error = document.getElementById("error")


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(input.value));
    ul.appendChild(newLi);
    input.value = "";

    // Adding Delete button to new item
    newLi.innerHTML = newLi.innerHTML + " ";
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("btn", "btn-danger");
    btn.onclick = removeItem;
    newLi.appendChild(btn);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        error.innerHTML = "";
        createListElement();
    } else {
        error.innerHTML = "Enter value";
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0) {
        if (event.keyCode === 13) {
            error.innerHTML = "";
            createListElement();
        }
    } else if (event.keyCode === 13 && inputLength() === 0) {
        error.innerHTML = "Enter value";
    }
}

// Adding Items to the list
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);


// Toggling the Done class
var ul = document.querySelector("ul");
var itemClick = ul.getElementsByTagName("li");

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

ul.onclick = function(event) {
    var target = getEventTarget(event);
    target.classList.toggle("done");
}


// Deleting Items
var deleteBtns = document.getElementsByClassName("deleteItem");
for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", removeItem, false);
}

function removeItem(event) {
    event.target.removeEventListener("click", removeItem, false);
    event.target.parentNode.remove();
}

