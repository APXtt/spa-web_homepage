const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function ToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now()
  }
  toDos.push(newTodoObj);
  saveToDo();
  paintToDo(newTodoObj);
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.classList.add("center")
  li.classList.add("input-element")
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  li.appendChild(span);
  toDoList.appendChild(li);


  li.addEventListener("click", stateToDo);
  li.addEventListener("dblclick", delToDo);
}

function stateToDo(event) {
    const li = event.target.parentElement;
    if (li.style.textDecoration == "line-through") {
        li.style.textDecoration = "";
    }
    else {
        li.style.textDecoration = "line-through";
    }
}

function delToDo(event) {
  const li = event.target.parentElement;

  toDos = toDos.filter((toDO)=> toDO.id != parseInt(li.id));
  saveToDo();

  li.remove();
}

function importTodo(){
  const saveTodos = localStorage.getItem("todos");
  if (saveTodos) {
    parseSaveTodos = JSON.parse(saveTodos);
    toDos = parseSaveTodos;
    parseSaveTodos.forEach(paintToDo);
  }
}

window.addEventListener('DOMContentLoaded', importTodo);
toDoForm.addEventListener("submit", ToDoSubmit);
