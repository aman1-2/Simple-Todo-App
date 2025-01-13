console.log("Welcome to the Todo App.")

let todoDataSection = document.getElementsByClassName("todo-data"); //This is extract the html element where we need to at the end append our todo child.
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