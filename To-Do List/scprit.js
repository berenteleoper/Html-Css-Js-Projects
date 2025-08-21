// LocalStorage'dan verileri yükle
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    showToast("⚠️ Boş görev eklenemez!", "danger");
    return;
  }

  let task = { text: taskText, done: false };
  saveTask(task);
  renderTask(task);

  showToast("✅ Görev eklendi!", "success");
  input.value = "";
}

// Görevi gönder
function renderTask(task) {
  let ul = document.getElementById("taskList");

  let li = document.createElement("li");
  if (task.done) li.classList.add("done");

  let span = document.createElement("span");
  span.textContent = task.text;
  span.style.cursor = "pointer";
  span.onclick = function () { toggleDone(li, task.text); };

  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "btn btn-sm btn-danger";
  delBtn.onclick = function () { deleteTask(li, task.text); };

  li.appendChild(span);
  li.appendChild(delBtn);
  ul.appendChild(li);
}

// Yapılan görevleri işaretleme
function toggleDone(li, text) {
  li.classList.toggle("done");
  updateTaskStatus(text, li.classList.contains("done"));
  showToast("✏️ Durum güncellendi!", "info");
}

// Silme
function deleteTask(li, text) {
  li.remove();
  removeTask(text);
  showToast("🗑️ Görev silindi!", "warning");
}

// Toast mesajı
function showToast(message, type="primary") {
  let toastEl = document.getElementById("liveToast");
  let toastBody = document.getElementById("toastMessage");

  toastEl.className = `toast align-items-center text-bg-${type} border-0`;
  toastBody.textContent = message;

  let toast = new bootstrap.Toast(toastEl);
  toast.show();
}

/* --- LocalStorage Fonksiyonları --- */
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(t => renderTask(t));
}

function updateTaskStatus(text, done) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let index = tasks.findIndex(t => t.text === text);
  if (index > -1) {
    tasks[index].done = done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function removeTask(text) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t.text !== text);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Enter tuşu ile görev ekleme
document.getElementById("taskInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // form submit olmasını engeller
    addTask();
  }
});

