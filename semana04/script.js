class Tarefa {
    constructor(taskName){
        taskName = taskName
    }
}

let task = new Tarefa("Nova Tarefa")

const addButton = document.querySelector("#addButton");
const ulElement = document.querySelector("#listarTarefas")
const inputBox = document.querySelector("#textBox")

function adicionaTarefaDOM (task) {
    event.preventDefault()
    let newList = document.createElement("li")
    task.taskName = inputBox.value
    newList.innerHTML = task.taskName
    ulElement.appendChild(newList)
    inputBox.value = ""
    adicionaTarefaNoStorage(task)
}

function adicionaTarefaNoStorage (task){
    
}

addButton.addEventListener("click", adicionaTarefaDOM)

