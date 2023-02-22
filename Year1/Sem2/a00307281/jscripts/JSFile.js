var $ = function (id) {
  return document.getElementById(id);
};
var ResetTextfields = function () {
  $("width").value = "";
  $("length").value = "";
  $("height").value = "";
  $("radius").value = "";
  $("resultPara").innerHTML =
    "Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
};
window.onload = function () {
  $("calculate").onclick = function () {
    calculate();
  };
  $("reset").onclick = function () {
    ResetTextfields();
  };
};
var SetFields = function (id) {
  /*This function takes an id which is an integer as a parameter
	This is parameter is passed from the HTML file when a choice is click on. 
	If the id is equal to 1 then the radius field is set to disabled and the 
	image src is changed to show the cube.jpg file
	If the id is 2 then the appropriate fileds is disabled and the cylinder.jpg image is 
	displayed. If the id is 3, agian the appropriate fields aer disabled/enabled and the sphere.jpg 
	image is displayed.*/
  if (id == 1) {
    $("width").disabled = false;
    $("length").disabled = false;
    $("height").disabled = false;
    $("radius").disabled = true;
    $("theImage").src = "images/cube.jpg";
  }
  if (id == 2) {
    $("width").disabled = true;
    $("length").disabled = true;
    $("height").disabled = false;
    $("radius").disabled = false;
    $("theImage").src = "images/cylinder.jpg";
  }
  if (id == 3) {
    $("width").disabled = true;
    $("length").disabled = true;
    $("height").disabled = true;
    $("radius").disabled = false;
    $("theImage").src = "images/sphere.jpg";
  }
};
var calculateTank = function () {
  /*This function takes the width, height and length values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the tank
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
  var l = parseFloat($("length").value);
  var w = parseFloat($("width").value);
  var h = parseFloat($("height").value);
  if (isNaN(l) || isNaN(w) || isNaN(h)) {
    console.log("Did not enter numbers");
    alert("You must enter numerical values!");
  } else {
    console.log("Calculating volume of a tank");
    let volume = (l * w * h).toFixed(2);
    $("resultPara").innerHTML = "The volume of this tank is: " + volume + "cm<sup>3</sup>";
  }
};
var calculateCylinder = function () {
  /*This function takes the radius and height values from the HTML, 
	checks to see if they are numbers, if so it calculates the volume of the cylinder
	The results are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
  var r = parseFloat($("radius").value);
  var h = parseFloat($("height").value);
  if (isNaN(r) || isNaN(h)) {
    console.log("Did not enter numbers");
    alert("You must enter numerical values!");
  } else {
    console.log("Calculating volume of a cylinder");
    let volume = (Math.PI * Math.pow(r, 2) * h).toFixed(2);
    $("resultPara").innerHTML = "The volume of this cylinder is: " + volume + "cm<sup>3</sup>";
  }
};
var calculateSphere = function () {
  /*This function takes the radius value from the HTML, 
	checks to see if it is a numbers, if so it calculates the volume of the sphere
	The result are printed to the paragraph at the bottom of the screen, as seen in
	the screen shot*/
  var r = parseFloat($("radius").value);
  if (isNaN(r)) {
    console.log("Did not enter numbers");
    alert("You must enter numerical values!");
  } else {
    console.log("Calculating volume of a sphere");
    let volume = ((4 * Math.PI * Math.pow(r, 3)) / 3).toFixed(2);
    $("resultPara").innerHTML = "The volume of this sphere is: " + volume + "cm<sup>3</sup>";
  }
};
var calculate = function () {
  /*This function checks to see what radio-button is selected and then
	calls the appropriate function.  For example if the Tank is checked the calculateTank
	function is called.*/
  if ($("tank").checked == true) {
    calculateTank();
  }
  if ($("cylinder").checked == true) {
    calculateCylinder();
  }
  if ($("sphere").checked == true) {
    calculateSphere();
  }
};
