// assigning the button element object representation to a variable in the file 
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
    event.preventDefault(); // prevents the browser to refresh when we press the "add task" button

    var taskNameInput = document.querySelector("input[name='task-name']").value; // retreiving the task name value the user entered 
    var taskTypeInput = document.querySelector("select[name='task-type']").value; // retreiving the task type value

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // resets the form task name input after every submission
    formEl.reset();

    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function (taskDataObj) {

    var listItemEl = document.createElement("li"); //create new task list item 
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div"); // create div to hold task info and add to list item 
    taskInfoEl.className = "task-info"; //give it a class name

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3> <span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list 
    tasksToDoEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", taskFormHandler);