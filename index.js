console.log("Welcome to the Todo App.")

let getTodo = document.getElementById("get-todo");

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
function clickBtn() {
    getTodo.style.display = "none";
    console.log("Clicked the get-todo and The display property is set to Hidden");
}