const sleepMenu = document.getElementById("sleep-menu")
const todoMenu = document.getElementById("todo-menu")
sleepMenu.addEventListener('click',sleep_menu);
todoMenu.addEventListener('click',todo_menu);
const todo_oj = document.getElementById("todo");
const sleep_oj = document.getElementById("sleep");

function todo_menu(){
    todo_oj.classList.remove("hidden");
    sleep_oj.classList.add("hidden");
    todoMenu.classList.add("menu-selection");
    sleepMenu.classList.remove("menu-selection");
}

function sleep_menu(){
    todo_oj.classList.add("hidden");
    sleep_oj.classList.remove("hidden");
    sleepMenu.classList.add("menu-selection");
    todoMenu.classList.remove("menu-selection");
}