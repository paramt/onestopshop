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

  document.getElementById("results").style.display = "block";
  document.getElementById("results").classList.add("animate__fadeInRight");

  var innerHTML = "";

  for (var i = 0; i < selectedItems.length; i++) {
    innerHTML += "<p>" + codeToName(selectedItems[i]) + " <span style='float: right'>$" + getPrice(selectedItems[i]) + "</span></p>"
  }

  document.getElementById("results-list").innerHTML = innerHTML;
  document.getElementById("location").innerHTML = getLocation(selectedItems);

}

function getPrice(id) {
  return (Math.round(Math.random() * 500) / 100).toFixed(2);
}

function getLocation(items) {
  return "Walmart";
}

function codeToName(code) {
  const codes = {
    "001.1": "Apple (Honeycrisp)",
    "001.2": "Apple (Granny Smith)",
    "002.1": "Orange",
    "002.2": "Clementine",
    "003.1": "Banana",
    "004.1": "Strawberry",
    "005.1": "Apricot",
    "006.1": "Blackberries",
    "007.1": "Nectarine",
    "008.1": "Blueberries",
    "009.1": "Canteloupe",
    "010.1": "Cherries",
    "101.1": "Carrots (mini)",
    "101.2": "Carrots (organic)",
    "102.1": "Potato (Russet)",
    "102.2": "Potato (Red)",
    "103.1": "Tomato (Roma)",
    "103.2": "Tomato (Beefsteak)",
    "104.1": "Onion (yellow)",
    "104.2": "Onion (red)",
    "105.1": "Broccoli stalks",
    "105.2": "Broccoli crowns",
    "106.1": "Red pepper",
    "106.2": "Green pepper",
    "106.3": "Yellow pepper",
    "107.1": "Lettuce (iceberg)",
    "107.2": "Lettuce (green leaf)",
    "108.1": "Eggplant",
    "108.2": "Chinese Eggplant",
    "108.2": "Chinese Eggplant",
    "109.1": "Cucumber (seedless)",
    "109.2": "Cucumber (mini)",
    "110.1": "Zucchini",
    "110.2": "Zucchini (organic)",
    "201.1": "Chicken",
    "202.1": "Ground beef",
    "202.2": "Boneless beef",
    "203.1": "Pork (shoulder blade)",
    "203.2": "Pork (ground)",
    "204.1": "Salmon",
    "204.2": "Trout",
  };

  return codes[code];
}
