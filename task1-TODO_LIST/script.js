const input = document.getElementById("addTaskInput");
const addBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {   //called whenever the UI is updated
    todoList.innerHTML = "";

    tasks.forEach((task,index) => {
        const list = document.createElement("li");
        list.textContent = task.text;

        if(task.completed){
            list.classList.add("completed");
        }

        list.addEventListener("click", () => {
            tasks[index].completed = !tasks[index].completed;
            savetoLocalStorage();
            displayTasks();
        });


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn")

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index,1);
            savetoLocalStorage();
            displayTasks();
        });

        list.appendChild(deleteBtn);
        todoList.appendChild(list);
    });
}

addBtn.addEventListener("click", (e) => {
        const text = input.value;

        if(text === "") return;

        tasks.push({text,completed: false});
        input.value = "";

        savetoLocalStorage();
        displayTasks();
})


function savetoLocalStorage(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

displayTasks();