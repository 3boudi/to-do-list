const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.text;
        if (task.checked) {
            li.classList.add("checked");
        }
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function () {
            li.remove();
            updateLocalStorage();
        });

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            updateLocalStorage();
        });
    });
}

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let task = {
            text: inputBox.value,
            checked: false
        };

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        span.addEventListener("click", function () {
            li.remove();
            updateLocalStorage();
        });

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            task.checked = !task.checked;  // Update the checked state
            updateLocalStorage();
        });

        // Add the task to the localStorage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    inputBox.value = "";
}

function updateLocalStorage() {
    const tasks = [];
    document.querySelectorAll("ul li").forEach((li) => {
        tasks.push({
            text: li.innerHTML.replace(/<span.*?>.*?<\/span>/, '').trim(),
            checked: li.classList.contains("checked")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function switching() {
    let displayImage = document.getElementById('img1');
    let button = document.querySelector('.switcher');
    let container = document.querySelector('.container');

    // Check if the current image is the crescent moon
    if (displayImage.src.endsWith('images/crescent-moon.png')) {
        displayImage.src = 'images/sun.png';
        button.style.background = "white";
        button.style.color = "black";
        container.style.background = "linear-gradient(135deg, rgb(82, 120, 198), rgb(243, 196, 254))";
    } else {
        displayImage.src = 'images/crescent-moon.png';
        button.style.background = "black";
        button.style.color = "white";
        container.style.background = "linear-gradient(135deg, #15171c, #31053c)";
    }
}

/*const inputBox = document.getElementById("input-box"); // Fixed method name
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
        span.addEventListener("click",function(){
            li.remove();
        });

        li.addEventListener("click",function(){
           li.classList.toggle("checked");
        });
    }
    inputBox.value = "";
}
function switching() {
    let displayImage = document.getElementById('img1');
    let button = document.querySelector('.switcher');
    let container = document.querySelector('.container');

    // Check if the current image is the crescent moon
    if (displayImage.src.endsWith('images/crescent-moon.png')) {
        displayImage.src = 'images/sun.png';
        button.style.background = "white";
        container.style.background = "linear-gradient(135deg, rgb(82, 120, 198), rgb(243, 196, 254))";
    } else {
        displayImage.src = 'images/crescent-moon.png';
        button.style.background = "black";
        container.style.background = "linear-gradient(135deg, #15171c, #31053c)";
    }
}*/
