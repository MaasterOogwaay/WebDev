function $(id) {
  return document.getElementById(id);
}

ResetTextFields = function () {
  console.log("Resetting text fields");
  $("pounds").value = "";
  $("kg").value = "";
};

convert = function () {
  console.log("Converting pounds to Kg's");
  let pounds = $("pounds").value;
  if (isNaN(pounds)) {
    alert("Please enter a numerical value!");
  } else {
    pounds = parseFloat(pounds);
    let kg = 0.453592 * pounds;
    $("kg").value = kg.toFixed(2);
  }
};

/*
    This function waits for an event to occu on the following buttons. When a button is clicked, the corresponding function is called
*/
window.onload = function () {
  $("convert").onclick = function () {
    convert();
  };
  $("reset").onclick = function () {
    ResetTextFields();
  };
};
