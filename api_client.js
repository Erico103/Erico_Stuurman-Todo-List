const input = document.getElementById('inputfield');
const addBtn = document.getElementById('addtodo');
const toDoContainer = document.getElementById('todo-container');
const toDoList = document.querySelector('.todo-list')

addBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteTodo)

function addToDo(e){
  if(input.value.trim()){
    e.preventDefault()
    // todo Div
    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('todo')
    const newTodo = document.createElement('li');
    newTodo.classList.add('toDo_item');
    newTodo.innerText = input.value
    
    
    
    //delete and trashbutton
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class="fas fa-check"></li>`
    completeBtn.classList.add('complete-btn');
    
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
    trashBtn.classList.add('trash-btn');
    
    //merging elements
    toDoDiv.appendChild(newTodo)
   
    toDoDiv.appendChild(completeBtn);
    toDoDiv.appendChild(trashBtn);
    toDoList.appendChild(toDoDiv)

  }
}

function deleteTodo(e){
const item = e.target;
if(item.classList[0] === 'trash-btn'){
item.parentElement.remove();
}
if(item.classList[0] === 'complete-btn'){
  const todo = item.parentElement;
  todo.classList.toggle('completed')
}
}
