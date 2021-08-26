// assigning the button element object representation to a variable in the file 
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    //created new task item 
    var listItemEl = document.createElement("li");
    // style the new task item 
    listItemEl.className = "task-item";
    // added the text 
    listItemEl.textContent = "This is a new task.";
    // append the new item to the task list 
    tasksToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTaskHandler);