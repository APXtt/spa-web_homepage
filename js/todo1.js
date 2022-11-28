const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
var toDoSave = [];

toDoForm.addEventListener("submit", todoSubmit);

function todoSubmit(event) {
    event.preventDefault();
    let data = toDoInput.value;
    toDoInput.value = "";

        if (localStorage.getItem("spa_todo") !== null) {
            let data = JSON.parse(localStorage.getItem("spa_todo"));
            for (i=0; i < data.length; i++){
                const li = document.createElement("li");
                li.classList.add('center');
                li.classList.add('input-element');
                li.innerText = data[i];
                toDoList.appendChild(li);
            }
            toDoSave = data;
        }
        else{
            const li = document.createElement("li");
            li.classList.add('center');
            li.classList.add('input-element');
            li.innerText = data;
            toDoList.appendChilld(li);
        }


    
    // li.addEventListener("click", todoState(li, "1c"));
    // li.addEventListener("dbclick", todoState(0, li, "2c"));
}

function todoState(li, state){
    console.log("test");
    if (state == "1c"){
            if (li.style.textDecoration == "line-through") {
                li.style.textDecoration = "";
            }
            else {
                li.style.textDecoration = "line-through";
            }
    }
    else if (state == "2c"){
            toDoList.removeChild(li);
    }
}

// var toDoSave = [];
// function todoSubmit(event){
//     event.preventDefault();
//     const data = toDoInput.value;
//     toDoInput.value = "";
//     todoAdd(data);
// }

// function todoAdd(data){       
//     const li = document.createElement("li");
//     li.classList.add('center');
//     li.classList.add('input-element');
//     li.innerText = data;
//     toDoList.appendChild(li);

//     li.addEventListener("click", function (){
//             if (li.style.textDecoration == "line-through") {
//                 li.style.textDecoration = "";
//             }
//             else {
//                 li.style.textDecoration = "line-through";
//             }
//     });
//     li.addEventListener("dblclick", function (){
//         toDoList.removeChild(li);
//     });

//     todoCheck(data);
// }

// function todoCheck(data=0){
//     if (data != 0) {
//         if (localStorage.getItem("spa_todo") !== null) {
//             let data = JSON.parse(localStorage.getItem("spa_todo"));
//             toDoSave = data;
//         }
//         toDoSave.push(data);
//         localStorage.setItem("spa_todo", JSON.stringify(toDoSave));
//     }
//     else if (localStorage.getItem("spa_todo") !== null) {
//         let data = JSON.parse(localStorage.getItem("spa_todo"));
//         for (i=0; i < data.length; i++){
//             const li = document.createElement("li");
//             li.classList.add('center');
//             li.classList.add('input-element');
//             li.innerText = data[i];
//             toDoList.appendChild(li);

//             li.addEventListener("click", function (){
//                 if (li.style.textDecoration == "line-through") {
//                     li.style.textDecoration = "";
//                 }
//                 else {
//                     li.style.textDecoration = "line-through";
//                 }
//             });
//             li.addEventListener("dblclick", function (){
//                 toDoList.removeChild(li);
//             });
//             }
//     }
// }



// todoCheck();
// toDoForm.addEventListener("submit", todoSubmit);