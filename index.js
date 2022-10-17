// TODO Eleman ekleme

// Eleman Seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;

// Load items
loadItems();

eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);
  // delete an item
  taskList.addEventListener("click", deleteItem);
  // delete all item
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems() {
  todos = getItemsFromLS();
  todos.forEach(function (item) {
    createItem(item);
  });
}

// Get items from LocalStorage
function getItemsFromLS() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function setItemToLS(newTodo) {
  todos = getItemsFromLS();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {
  // input alanına girilen elemanı enter veya artı butonuna basıldığında listeye eklemek için li oluşturma!
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(newTodo));

  // a elementi oluşturmak!
  const a = document.createElement("a");
  a.classList = "delete-item position-absolute end-0 me-3";
  a.setAttribute;
  "href", "#";
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);
}

// Input'a değer girilmeden enter veya ekle butonuna basılırsa aşağıdaki fonksiyon çalışır!
function addNewItem(e) {
  if (input.value === "") {
    alert("Please add new item");
    //console.log('submit');
  }

  // create Item function call
  createItem(input.value);

  setItemToLS(input.value);

  input.value = "";

  e.preventDefault();
}

// Eleman Silme
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Silmek istediğinize emin misiniz?")) {
      // console.log(e.target);
      e.target.parentElement.parentElement.remove();
      deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
  }
  // e.pareventDefault();
}

// LocalStorage dan Silme İşlemi
function deleteTodoFromStorage(deleteTodo) {
  let todos = getItemsFromLS();
  todos.forEach(function (todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Tüm Elemanları Silme
function deleteAllItems(e) {
  if (confirm("Tüm elemanları silmek istediğinize emin misiniz?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }
}
// Tek seferde innerHTML içerisini boşaltmak istersek; taskList.innerHTML=""; kullanılabilir!
