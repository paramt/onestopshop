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
    if (selectedItems[i] == id + ".1") {
      selectedItems.splice(i, i + 1);
      itemExistsInList = true;
    }
  }

  if (itemExistsInList) {
    document.getElementById("card-" + id).classList.remove("selected");
    document.getElementById("arrow-" + id).classList.remove("selected");
  } else {
    document.getElementById("card-" + id).classList.add("selected");
    document.getElementById("arrow-" + id).classList.add("selected");
    selectedItems.push(id + ".1");
  }
}

function dropdown(id) {
  const menus = document.getElementsByClassName("dropdown-content");
  const arrows = document.getElementsByClassName("dropdown-arrow");

  for (var i = 0; i < menus.length; i++) {
    if (menus[i].id != "dropdown-" + id) {
      menus[i].style.display = "none";
      arrows[i].innerHTML = "<i class='fas fa-caret-down'></i>";
    }
  }

  if (document.getElementById("dropdown-" + id).style.display == "block") {
    document.getElementById("dropdown-" + id).style.display = "none";
    document.getElementById("arrow-" + id).innerHTML =
      "<i class='fas fa-caret-down'></i>";
  } else {
    document.getElementById("dropdown-" + id).style.display = "block";
    document.getElementById("arrow-" + id).innerHTML =
      "<i class='fas fa-caret-up'></i>";
  }
}

function selectType(id, typeID) {
  const buttons = document.getElementsByClassName("select-" + typeID);

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");

    for (var j = 0; j < selectedItems.length; j++) {
      if (selectedItems[j] == buttons[i].id.split("select-")[1]) {
        selectedItems.splice(j, j + 1);
      }
    }
  }

  document.getElementById("select-" + id).classList.add("selected");
  document.getElementById("card-" + typeID).classList.add("selected");
  document.getElementById("arrow-" + typeID).classList.add("selected");
  selectedItems.push(id);
}

function submit() {
  document
    .getElementById("box-container")
    .classList.add("animate__animated", "animate__fadeOutLeft");
  window.setTimeout(() => {
    document.getElementById("box-container").style.display = "none";
  }, 1000);

  var xhr = new XMLHttpRequest();
  var url = "";
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 201) {
      var json = JSON.parse(xhr.responseText);
      document.getElementById("results").style.display = "block";
      document.getElementById("results").classList.add("animate__fadeInRight");
      document.getElementById("results-header").innerHTML = json[0];
    }
  };

  var data = JSON.stringify(selectedItems);

  xhr.send(data);
}
