document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.style.marginLeft = "10px";
    editButton.addEventListener("click", () => {
      const newTaskText = prompt("Edit your task:", taskText);
      if (newTaskText) taskItem.firstChild.textContent = newTaskText;
    });

    taskItem.appendChild(editButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  });
});