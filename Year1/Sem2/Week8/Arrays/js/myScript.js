let items = ["Superman", "Batman", "Wonder Woman", "Flash", "Cyborg"];

function $(id) {
  return document.getElementById(id);
}

function LoadAndDisplay() {
  let list = "<ol start ='0'>";
  for (let i = 0; i < items.length; i++) {
    list += "<li>" + items[i] + "</li>";
  }
  list += "</ol>";
  $("listItems").innerHTML = list;
  console.log(list);
}

function addItem() {
  let item = $("input").value;
  if (item.length == 0) {
    alert("You must enter some text to add the item to the array");
  } else {
    console.log(`Adding ${item} to list`);
    items.push(item);
    LoadAndDisplay();
  }
}

function sortItems() {
  console.log("Sorting List");
  items.sort();
  LoadAndDisplay();
}

function getItemAtIndex() {
  let index = $("getIndex").value;
  if (isNaN(index) || index.length == 0 || index < 0 || index >= items.length) {
    alert("You must enter a numerical value for the index between the range 0 -" + (items.length - 1));
  } else {
    console.log(`Getting item at index ${index}`);
    $("listItems").innerHTML =
      "<h2 class='w3-teal w3-margin'>Item at index " + index + "</h2><p class='w3-margin'>" + items[index] + "</p>";
  }
}

function SearchForItem() {
  let item = $("searchItem").value;
  let found = items.indexOf(item);
  if (found == -1) {
    alert("Item is not in list, maybe check spelling if you're sure it's there");
  } else {
    alert("Item found in position " + found);
    console.log(`Item found at index ${found}`);
  }
}

function removeItem() {
  let index = $("removeItem").value;
  if (isNaN(index) || index.length == 0 || index < 0 || index >= items.length) {
    alert("You must enter a numerical value for the index between the range 0 -" + (items.length - 1));
  } else {
    items.splice(index, 1);
    LoadAndDisplay();
    console.log(`Removing item at index ${index}`);
  }
}

window.onload = function () {
  $("display").onclick = function () {
    LoadAndDisplay();
  };
  $("addItem").onclick = function () {
    addItem();
  };
  $("sort").onclick = function () {
    sortItems();
  };
  $("showIndex").onclick = function () {
    getItemAtIndex();
  };
  $("searchFor").onclick = function () {
    SearchForItem();
  };
  $("remove").onclick = function () {
    removeItem();
  };
};
