console.log("Script is working")

let taskInput = document.querySelector("#input-box");
const addIcon = document.querySelector("#add-icon");
const toDoColumn = document.querySelector("#to-do-column")

if (addIcon) {
    addIcon.addEventListener("click", function(){
        let taskPlace = 1;
        const taskWrapper = document.createElement("div");
        taskWrapper.classList.add("task-wrapper");
        const taskName = document.createElement("div");
        taskName.classList.add("task-name");
        taskName.innerText =taskInput.value;
        const taskIconBar = document.createElement("div");
        taskIconBar.classList.add("task-icon-bar");
        const leftIcon = document.createElement("i");
        leftIcon.classList.add("icon-task", "left-icon", "fas", "fa-arrow-alt-circle-left");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("icon-task", "delete-icon", "fas", "fa-trash-alt");
        const rightIcon = document.createElement("i");
        rightIcon.classList.add("icon-task", "right-icon", "fas", "fa-arrow-alt-circle-right");
        taskWrapper.append(taskName)
        taskWrapper.append(taskIconBar)
        taskIconBar.append(leftIcon, deleteIcon, rightIcon)
        toDoColumn.append(taskWrapper)
        addEventListenersToTask(taskWrapper)
    })
}

function addEventListenersToTask(taskBox) {
    const deleteIcon = taskBox.querySelector(".delete-icon");
    if (deleteIcon) {
        deleteIcon.addEventListener("click", function(){
            taskBox.remove()
    })
    }
}

