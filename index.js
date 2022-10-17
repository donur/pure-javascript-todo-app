// TODO Eleman ekleme

// Eleman Seçimi
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);
  // delete an item
  taskList.addEventListener("click", deleteItem);
  // delete all item
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("Please add new item");
    //console.log('submit');
  }

  // input alanına girilen elemanı enter veya artı butonuna basıldığında listeye eklemek için li oluşturma!
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));

  // a elementi oluşturmak!
  const a = document.createElement("a");
  a.classList = "delete-item position-absolute end-0 me-3";
  a.setAttribute;
  "href", "#";
  a.innerHTML = '<i class="fas fa-times"></i>';

  li.appendChild(a);
  taskList.appendChild(li);

  input.value = "";

  e.preventDefault();
}

// Eleman Silme
function deleteItem(e) {
  if (confirm("Silmek istediğinize emin misiniz?")) {
    if (e.target.className === "fas fa-times") {
      // console.log(e.target);
      e.target.parentElement.parentElement.remove();
    }
  }
  e.pareventDefault();
}

// Tüm Elemanları Silme
function deleteAllItems(e) {
  if (confirm("Tüm elemanları silmek istediğinize emin misiniz?")) {
    taskList.childNodes.forEach(function (item) {
      // console.log(item);
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }
  // Tek seferde innerHTML içerisini boşaltmak istersek; taskList.innerHTML=""; kullanılabilir!
}
