const input = document.getElementById("inputfield");
const addBtn = document.getElementById("addtodo");
const toDoContainer = document.getElementById("todo-container");
const toDoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteTodo);

storedToDo();

function addToDo(e) {
  if (input.value.trim()) {
    e.preventDefault();

    // todo Div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("toDo_item");
    newTodo.innerText = input.value;

    //delete and trashbutton
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = `<i class="fas fa-check"></li>`;
    completeBtn.classList.add("complete-btn");

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");

    //merging elements
    toDoDiv.appendChild(newTodo);
    toDoDiv.appendChild(completeBtn);
    toDoDiv.appendChild(trashBtn);
    toDoList.appendChild(toDoDiv);

    PostTodo();
  }
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
     item.parentElement.remove();
    // const idTodo = item.parentElement.value;
    // const id = idTodo._id
    // console.log(id)
    deleteApiToDo();
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

async function PostTodo() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    todo: input.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  await fetch("http://localhost:3000/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

async function storedToDo() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  await fetch("http://localhost:3000/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

async function deleteApiToDo() {
  var requestOptions = {
    method: "DELETE",
    
  };



  await fetch("http://localhost:3000/", requestOptions)
    .then(response => response.json())
    
    .then(result => console.log(result._id) )
    .catch(error => console.log("error", error));
}
