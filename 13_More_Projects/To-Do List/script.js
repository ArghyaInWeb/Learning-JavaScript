const todoInput = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
  }
);

function createTodoItem(task) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");

  const todoText = document.createElement("span");
  todoText.classList.add("todo-text");
  todoText.textContent = task;

  const deleteIcon = document.createElement("div");
  deleteIcon.classList.add("delete-icon");

  const deleteImg = document.createElement("img");
  deleteImg.src = "assets/delete.svg";
  deleteImg.alt = "";
  deleteIcon.appendChild(deleteImg);

  todoItem.appendChild(checkBox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteIcon);
  todoList.appendChild(todoItem);

  observer.observe(todoItem);

  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("checked");
    todoText.classList.toggle("completed");

    const existingCheckMark = checkBox.querySelector(".checkmark");
    if (existingCheckMark) {
      existingCheckMark.remove();
    } else {
      const checkMark = document.createElement("span");
      checkMark.classList.add("checkmark");
      checkMark.innerHTML = `<img src="assets/tick.svg" />`;
      checkBox.appendChild(checkMark);
    }
  });

  deleteIcon.addEventListener("click", () => {
    observer.unobserve(todoItem);
    todoItem.remove();
  });
}

function addTodo(e) {
  e.preventDefault();
  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    createTodoItem(newTask);
    todoInput.value = "";
  }
}

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo(e);
});
