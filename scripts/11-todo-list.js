const todoList = [{
    name : 'masak',
    dueDate : '2024-11-02'
}];

renderTodoList();

function renderTodoList(){


    let todoListHTML = '';

    for(let i = 0 ; i < todoList.length ; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const  dueDate = todoObject.dueDate;
        //Destructuring
        const{name,dueDate} = todoObject;
        //genereting html in js
        //Create delete button html in js
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-button"> Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInput = document.querySelector('.js-date-input');
    const dueDate = dateInput.value;

    //push task inserted
    todoList.push({
        name: name ,
        dueDate : dueDate
    });

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}