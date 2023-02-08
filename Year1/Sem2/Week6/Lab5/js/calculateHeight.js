function $(id) {
  return document.getElementById(id);
}

function calculate() {
  // Get data from the page using $ function
  // and the id of the textfield
  let name = $("name").value;
  let inch = $("inches").value;

  // check to see if inches is numerical
  if (isNaN(inch)) {
    alert("The value you entered was not a numerical value!");
  } else {
    let feet = (parseInt(inch) / 12).toFixed(2);
    $("feet").value = feet;
    $("result").innerHTML = "Name: " + name + "<br/>Inches: " + inch + "<br/>Feet: " + feet + "";
  }
}

function ResetTextFields() {
  /*
        This function resets the values in the textfields back to being empty.
    */
  $("name").value = "";
  $("inches").value = "";
  $("feet").value = "";
  $("result").innerHTML = "Reset button pressed";
}

/*
    This function waits for an event to occu on the following buttons. When a button is clicked, the corresponding function is called
*/
window.onload = function () {
  $("calculate").onclick = function () {
    calculate();
  };
  $("reset").onclick = function () {
    ResetTextFields();
  };
};
