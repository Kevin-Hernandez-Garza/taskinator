// assigning the button element object representation to a variable in the file 
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    event.preventDefault(); // prevents the browser to refresh when we press the "add task" button

    var taskNameInput = document.querySelector("input[name='task-name']").value; // retreiving the task name value the user entered 
    var taskTypeInput = document.querySelector("select[name='task-type']").value; // retreiving the task type value

    var listItemEl = document.createElement("li"); //create new task list item 
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div"); // create div to hold task info and add to list item 
    taskInfoEl.className = "task-info"; //give it a class name


    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3> <span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list 
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);