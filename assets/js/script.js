var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler =  function() {
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
buttonEl.addEventListener("click", createTaskHandler);
