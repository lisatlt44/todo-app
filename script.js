function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + ' <button class="deleteButton" onclick="removeTask(this)">Supprimer</button>';
      taskList.appendChild(li);
      taskInput.value = "";
  }
}

function removeTask(element) {
  element.parentNode.remove();
}
