
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  let span = document.createElement("span");
  span.innerText = taskValue;
  span.onclick = () => span.classList.toggle("completed");

  let btnGroup = document.createElement("div");

  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-warning btn-sm me-1";
  editBtn.innerText = "Edit";
  editBtn.onclick = () => {
    let newTask = prompt("Edit task:", span.innerText);
    if (newTask !== null) span.innerText = newTask;
  };

  let delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm";
  delBtn.innerText = "Delete";
  delBtn.onclick = () => li.remove();

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}


