const addItem = () => {
    const inputFiled = document.getElementById('input-filed');
    const inputItem = inputFiled.value;
    console.log(inputItem);

    // Call Display Item Function
    displayListItem(inputItem);

    addToDoList(inputItem);

    // Clear Input Filed
    inputFiled.value = '';
}

const displayListItem = listItem => {
    const displayContainer = document.getElementById('display-container');
    const newItem = document.createElement('div');
    newItem.classList.add('single-list');
    newItem.innerHTML = `
        <p>${listItem}</p>
        <img src="img/delete.png" alt="Delete Icon">
    `;
    displayContainer.appendChild(newItem);
}

const getToDoList = () => {
    const todoList = localStorage.getItem('todoList');
    let todoObject;
    if (todoList) {
        todoObject = JSON.parse(todoList);
    } else {
        todoObject = {};
    }
    return todoObject;
}

const addToDoList = toDoList => {
    const toDo = getToDoList();
    // console.log(toDo);
    toDo[toDoList] = 1;
    const toDoStringified = JSON.stringify(toDo);
    localStorage.setItem('ToDo-List', toDoStringified);
}