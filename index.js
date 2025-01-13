console.log("Welcome to the Todo App.")

let todoDataSection = document.getElementsByClassName("todo-data"); //This is extract the html element where we need to at the end append our todo child.
let saveBtn = document.getElementById("save-btn");
let todoInputBar = document.getElementById("todo-input-bar");

//Adding a listener to tell if the anything is written in the input bar then enable the save button.
todoInputBar.addEventListener("keyup", function toggleSaveBtn() {
    if(todoInputBar.value.length == 0) { //If the length of the text in the input bar is 0 then check if the save btn doesn't contains disabled then add it othewise don't do anything.
        if(saveBtn.classList.contains("disabled"))  return;
        saveBtn.classList.add("disabled");
    }
    else if(saveBtn.classList.contains("disabled"))
        saveBtn.classList.remove("disabled");
    //If we have runned if once then we don't need to do anything else therefore other condition is in else if
    //if the text length is not zero and if the save btn contains disabled property then we need to remove that property.
});

saveBtn.addEventListener("click", function getTextAndAddTodo() {
    let todoText = todoInputBar.value; //With the value property we can access the text present inside our input bar.
    if(todoText.length == 0)    return; //If there is no todo passed then we don't need to do anything.
    addTodo(todoText); //If there is some value available in the todo bar then we need to call the addTodo function with the text in it.
    todoInputBar.value = ""; //Once we have added the todo by clicking on the save button the input bar should go blank once again.
});

function addTodo(todoData) {
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoAction = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton = document.createElement("button");
    let hr = document.createElement("hr");

    //Adding classes in our div
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item", "d-flex", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail");
    todoStatus.classList.add("todo-status");
    todoAction.classList.add("todo-actions", "d-flex", "justify-content-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger");
    finishedButton.classList.add("btn", "btn-success");

    todoNumber.textContent = "1";
    todoDetail.textContent = todoData; //This text content will get that value which we will pass by pressing the save of the input.
    todoStatus.textContent = "In Progress";
    deleteButton.textContent = "Delete";
    finishedButton.textContent = "Finished";

    //Now inside the todo-action div we will append our delete and finished button
    todoAction.appendChild(deleteButton);
    todoAction.appendChild(finishedButton);

    //Just appending the elements
    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoAction);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    //Now appending our todo in the todo-data div.
    todoDataSection[0].appendChild(rowDiv);

}








//For Reference ->

// let getTodo = document.getElementById("get-todo");

//This is technically a registration of the event Listener and we can attach mutiple listener.
// getTodo.addEventListener("click", ()=>{
//     getTodo.style.display = "none";
//     console.log("Clicked the get-todo and The display property is set to Hidden");
// });


//The other way of registering the getTodo is by directly applying the particular event on the html element.
//If that event is available for our html element we can do it with the help of on prepended with the event name
//and then a callback function being pointed to the defined event.
// getTodo.onclick = () => {
//     getTodo.style.display = "none";
//     console.log("Clicked the get-todo and The display property is set to Hidden");
// }; //This will work the same way as defined.


//Third way of adding an event is by directly attaching the event type in the HTML element with the help of an attribute.
//And here we define the function which will happen when that event is triggered.
// function clickBtn() {
//     getTodo.style.display = "none";
//     console.log("Clicked the get-todo and The display property is set to Hidden");
// }