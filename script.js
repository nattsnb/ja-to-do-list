import {deleteOnClick} from "./deleteFunction.js"

const taskInput = document.querySelector("#input-box");
const addIcon = document.querySelector("#add-icon");
const toDoColumn = document.querySelector("#to-do-column");
const doingColumn = document.querySelector("#doing-column");
const doneColumn = document.querySelector("#done-column");

if (addIcon) {
    addIcon.addEventListener("click", function(){
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
        taskWrapper.append(taskName);
        taskWrapper.append(taskIconBar);
        taskIconBar.append(leftIcon, deleteIcon, rightIcon);
        toDoColumn.append(taskWrapper);
        addEventListenersToToDoSection(taskWrapper);
        taskInput.value = "";
    })
}

function addEventListenersToToDoSection(taskBox) {
    const deleteIconFunction = taskBox.querySelector(".delete-icon");
    if (deleteIconFunction) {
        deleteOnClick(deleteIconFunction, taskBox);
        }
    const doingColumn = document.querySelector("#doing-column");
    const rightIconFunction = taskBox.querySelector(".right-icon");
    if (rightIconFunction) {
        rightIconFunction.addEventListener("click", function(){
            const clonedTask = taskBox.cloneNode(true);
            addEventListenersToDoingSection(clonedTask);
            doingColumn.append(clonedTask);
            taskBox.remove();
        })
    }
}

function addEventListenersToDoingSection(taskBox) {
    const deleteIconFunction = taskBox.querySelector(".delete-icon");
    if (deleteIconFunction) {
        deleteOnClick(deleteIconFunction, taskBox);
    }
    const leftIconFunction = taskBox.querySelector(".left-icon");
    if (leftIconFunction) {
        leftIconFunction.addEventListener("click", function(){
            const clonedTask = taskBox.cloneNode(true);
            addEventListenersToToDoSection(clonedTask);
            toDoColumn.append(clonedTask);
            taskBox.remove();
        })
    }
    const rightIconFunction = taskBox.querySelector(".right-icon");
    if (rightIconFunction) {
        rightIconFunction.addEventListener("click", function(){
            const clonedTask = taskBox.cloneNode(true);
            addEventListenersToDoneSection(clonedTask);
            doneColumn.append(clonedTask);
            taskBox.remove();
        })
    }
}

function addEventListenersToDoneSection(taskBox) {
    const deleteIconFunction = taskBox.querySelector(".delete-icon");
    if (deleteIconFunction) {
        deleteOnClick(deleteIconFunction, taskBox);
    }
    const leftIconFunction = taskBox.querySelector(".left-icon");
    if (leftIconFunction) {
        leftIconFunction.addEventListener("click", function(){
            const clonedTask = taskBox.cloneNode(true);
            addEventListenersToDoingSection(clonedTask);
            doingColumn.append(clonedTask);
            taskBox.remove();
        })
    }
}
