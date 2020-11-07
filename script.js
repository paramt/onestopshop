selectedItems = [];

function moveup() {
  document.getElementById("main").style.height = "300px";
  document.getElementById("welcome").style.opacity = "0";
  document.getElementById("start-btn").style.opacity = "0";
}

function start() {
  moveup();
  document.getElementById("box-container").style.display = "block";
}

function handleTabClick(event, tabName) {
  let i, tabcontent, tablinks;

  // This is to clear the previous clicked content.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Set the tab to be "active".
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Display the clicked tab and set it to active.
  document.getElementById(tabName).style.display = "grid";
  event.currentTarget.className += " active";
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
