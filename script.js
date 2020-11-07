selectedItems = [];

function moveup() {
  document.getElementById("main").style.height = "300px";
  document.getElementById("welcome").style.opacity = "0";
  document.getElementById("start-btn").style.opacity = "0";
}

function start() {
  moveup();
  document.getElementById("login").style.display = "grid";
}

function select(id) {
  itemExistsInList = false;

  for (var i = 0; i < selectedItems.length; i++) {
    if (selectedItems[i] == id) {
      selectedItems.splice(i, i + 1);
      itemExistsInList = true;
    }
  }

  if (itemExistsInList) {
    document.getElementById("card-" + id).classList.remove("selected");
  } else {
    document.getElementById("card-" + id).classList.add("selected");
    selectedItems.push(id);
  }
}
