const inputBox = document.getElementById("input-box"); // Fixed method name
const listContainer = document.getElementById("list-container"); // Fixed method name

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7"
        li.appendChild(span);
       
    }
    inputBox.value = "";
}


