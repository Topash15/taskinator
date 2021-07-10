var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler =  function(event) {

    //ignores the browser default behavior to refresh page when submitted
    event.preventDefault();

    //creates an object<li>
    var listItemEl = document.createElement("li");
    //adds class property
    listItemEl.className = "task-item";
    //adds content
    listItemEl.textContent = "This is a new task";
    //adds <li> to the list
    tasksToDoEl.appendChild(listItemEl);
}

//listens for button to be clicked and exectutes function
formEl.addEventListener("submit", createTaskHandler);
