console.log("Welcome to the Todo App.");

let todos = [];
todos.push({text: "Need to complete the DSA Series", status: "In Progress"});

let todoDataList = document.getElementsByClassName("todo-data-list"); //This is extract the html element where we need to at the end append our todo child.
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
    let todo = {text: todoText, status: "In Progress", finishedButtonText: "Finished"}; //A todo object created.
    todos.push(todo); //Whenever we need to add a todo then we will first of all add that text in an array.
    addTodo(todo, todos.length); //If there is some value available in the todo bar then we need to call the addTodo function with the text in it.
    todoInputBar.value = ""; //Once we have added the todo by clicking on the save button the input bar should go blank once again.
    saveBtn.classList.add("disabled"); //After we have made a successful saving of todo after that we wjust need to add a disable property again.
});

function reRenderTodos() { //Using this thing again and again therefore created a function for this.
    todoDataList[0].innerHTML = ''; //Firstly removed each element.
    todos.forEach((element, idx) => { //Then with the loop re-rendered.
        addTodo(element, idx+1);
    });
}

function finishedTodo(event) {
    console.log("Changing the status of the todo to finished.")
    let finishedButtonPressed = event.target;
    let idxStatusToUpdate = Number(finishedButtonPressed.getAttribute("todo-idx"));
    //Implemented Toggle like feature
    if(todos[idxStatusToUpdate].status == "Finished") {
        todos[idxStatusToUpdate].status = "In Progress";
        todos[idxStatusToUpdate].finishedButtonText = "Finished";
    } else {
        todos[idxStatusToUpdate].status = "Finished";
        todos[idxStatusToUpdate].finishedButtonText = "Undo";
    }
    //Sorting the todos. Need to pass the custom comparator because we have objects.
    todos.sort((obj1, obj2)=> {
        if(obj1.status == "Finished")  return 1; //1 places obj2 before obj1
        return -1; //-1 places obj1 before obj2;
    });
    //Once the status is updated then we need to re-render our todo-list once again.
    reRenderTodos();
}

function deleteTodo(event) {
    console.log("Delete todo function called");
    //Step 1: Getting the pressed button using event.target.
    let deleteButtonPressed = event.target;
    //Step 2: Fetching out the index position of the todo in the array.
    let idxToRemove = Number(deleteButtonPressed.getAttribute("todo-idx"));
    //Step 3: Removing that todo element from the array.
    todos.splice(idxToRemove, 1);
    //Step 4: Removing the complete todo-data element with all its child value actually erasing all the child values of the todo-data element.
    //Step 5: Running the loop on the array to add the todo's again like re-rendering is happening.
    reRenderTodos();
}

function addTodo(todoData, todoCount) { //Passed todo data and number
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
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finished-todo");

    finishedButton.setAttribute("todo-idx", todoCount-1); //Added a attribute in the finished element as well.
    deleteButton.setAttribute("todo-idx", todoCount-1); //Before deleteing the todo set the count value to that index position. Array is 0-based that's why count-1.
    deleteButton.addEventListener("click", deleteTodo); //Added a click event Listener on our deletebutton which is calling deleteTodo function.
    finishedButton.addEventListener("click", finishedTodo);

    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todoData.text; //This text content will get that value which we will be typed in the input bar.
    todoStatus.textContent = todoData.status; //This status will get the value stored in the todos array's particulat todo object.
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todoData.finishedButtonText;

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
    todoDataList[0].appendChild(rowDiv);

}

let deleteBtn = document.getElementById("delete-todo");
deleteBtn.onclick = deleteTodo;
let finishedBtn = document.getElementById("finished-todo");
finishedBtn.onclick = finishedTodo;







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