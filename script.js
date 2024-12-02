// dom reference
const inputValue = document.getElementById('inputTask')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')
const emptyMessage = document.getElementById('emptyMessage')

// create array which holds all the task
let tasks = []

// function to render the task list

function renderTask(){
    // clear the current task list
    taskList.innerHTML = '';

    // if there is no task, show empty message

    if(tasks.length === 0){
        emptyMessage.style.display = "block";
    }else{
        // hide the empty message
        emptyMessage.style.display = "none";

        // loop through tasks array and create li for each task

        tasks.forEach((task, index) =>{
            const li = document.createElement('li')
            li.textContent = task
            taskList.appendChild(li)
        })
    }
}

// function to add new task

function addTask(){
    const newTask = inputValue.value.trim() // to get the value of input field

    if(newTask !== ''){
        tasks.push(newTask);
        inputValue.value = "" // it will clear the input field
        renderTask();
    }
}

addTaskButton.addEventListener("click", addTask);

// renderTask();