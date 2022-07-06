const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#todos");

form.addEventListener('submit',(x) => {
 x.preventDefault();

 const todo = input.value;
 if(!todo){
    alert("please fill in your todo");
    return;
 }
let todo_el = document.createElement("div");
 todo_el.classList.add("todo");
  
 let todo_content_el = document.createElement("div");
 todo_content_el.classList.add("content");
 
 todo_el.appendChild(todo_content_el);

 let todo_input_el = document.createElement("input");
 todo_input_el.classList.add("text");
 todo_input_el.type = "text";
 todo_input_el.value = todo;
 todo_input_el.setAttribute("readonly", "readonly");

 todo_content_el.appendChild(todo_input_el);

let todo_actions_el = document.createElement("div");
todo_actions_el.classList.add("actions");

todo_el.appendChild(todo_actions_el);

let todo_edit_el =document.createElement("button");
todo_edit_el.classList.add("edit");
todo_edit_el.innerHTML="edit";

let todo_delete_el = document.createElement("button");
todo_delete_el.classList.add("delete");
todo_delete_el.innerHTML="delete";

todo_actions_el.appendChild(todo_edit_el);
todo_actions_el.appendChild(todo_delete_el);

list.appendChild(todo_el);

input.value="";

todo_edit_el.addEventListener("click", () => {
    if(todo_edit_el.innerText==="EDIT"){
        todo_input_el.removeAttribute("readonly");
        todo_input_el.focus();
        todo_edit_el.innerText="SAVE";
    }else{
        todo_input_el.setAttribute("readonly", "readonly");
        todo_edit_el.innerText="EDIT";
    }
})
todo_delete_el.addEventListener("click", () => {
    list.removeChild(todo_el);
})
})