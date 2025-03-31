const todoList=[{
  name: '',
  dueDate:''
}];
renderToDoList();
function renderToDoList() {
  let todoListHTML='';
  todoList.forEach(function(todoobject,i){const name = todoobject.name; 
    const dueDate = todoobject.dueDate; 

    const html =`
    <div> 
    ${name}</div><div> ${dueDate}</div> 
  <button onclick = "
  todoList.splice(${i}, 1); 
  renderToDoList();" class="delete-todo"> Delete </button>
    `;
    todoListHTML +=html;})
  
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}
window.addTodo = function() { // Ensure addTodo is globally accessible
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dueDateinputElement = document.querySelector('.js-date');
  const dueDate = dueDateinputElement.value; // Corrected line
  todoList.push({
    name,
    dueDate
  }); 

  inputElement.value = '';

  renderToDoList();
}
