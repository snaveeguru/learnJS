function insertTask() {
  const input = document.getElementById("task-input");
  const list = document.getElementById("task-list");

  const value = input.value.trim();
  if (value === "") return;

  const item = document.createElement("li");
  item.className = "task-item";

  const label = document.createElement("span");
  label.textContent = value;

  const removeBtn = document.createElement("button");
  //removeBtn.textContent = "🗑️";
  removeBtn.textContent = "Delete";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => item.remove();

  item.appendChild(label);
  item.appendChild(removeBtn);
  list.appendChild(item);
  input.value = "";
}

