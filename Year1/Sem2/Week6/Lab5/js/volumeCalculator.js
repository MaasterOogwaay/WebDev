function $(id) {
  return document.getElementById(id);
}

function calculate() {
  // Get data from the page using $ function
  // and the id of the textfield
  let height = $("height").value;
  let radius = $("radius").value;

  // check to see if inches is numerical
  if (isNaN(height) || isNaN(radius)) {
    alert("The value you entered was not a numerical value!");
  } else {
    let volume = (Math.PI * Math.pow(radius, 2) * height).toFixed(2);
    $("volume").value = volume;
    $("result").innerHTML =
      "The volume of this cylinder is:\nV = &#960; * r<sup>2</sup> * h = &#960; * " +
      radius +
      "<sup>2</sup> * " +
      height +
      " &#8776; " +
      volume +
      "cm<sup>3</sup>";
  }
}

function ResetTextFields() {
  /*
        This function resets the values in the textfields back to being empty.
    */
  $("height").value = "";
  $("radius").value = "";
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
