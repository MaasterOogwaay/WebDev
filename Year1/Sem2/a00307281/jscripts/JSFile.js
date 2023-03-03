// TODO
// Figure out how to decipher which button is selected (DONE)
// Fix the buttons in HTML (DONE)
// Macro calculator for rest of males and all females (DONE)
// BMI calculator
// Body fat calculator
// Change id's of everything || create global variables (OBSELETE)
// Change cells to be like HTML line 100 (DONE)
// updateLabel function - look at PlotlyDemo (DONE)
// Plotly (DONE)

var weight = 0;
var height = 0;
var age = 0;
var carbs = 0;
var protein = 0;
var fats = 0;

var $ = function (id) {
  return document.getElementById(id);
};
window.onload = function () {
  $("Calculate").onclick = function () {
    calculate();
    genPieChart();
  };
};

function SetFields(id) {
  /*This function takes an id which is an integer as a parameter.
	This is parameter is passed from the radio buttons in the HTML file.
  e.g If the id is 1, then the Macros calculator is shown*/
  if (id == 1) {
    // $("width").disabled = false;
    // $("length").disabled = false;
    // $("height").disabled = false;
    // $("radius").disabled = true;
    // $("theImage").src = "images/cube.jpg";
    document.title = "Macro Calculator";
  }
  if (id == 2) {
    document.title = "BMI Calculator";
  }
  if (id == 3) {
    document.title = "Body Fat Calculator";
  }
}

function displayWeightActivity(BMR) {
  // var carbs = 0;
  // var protein = 0;
  // var fats = 0;
  var genderValue = document.querySelector("input[type=radio][name=gender]:checked").value;
  var weightGoalValue = document.querySelector("input[type=radio][name=weightGoal]:checked").value;
  var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked").value;

  if (weightGoalValue == "Lose weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.4) / 4);
    fats = Math.ceil((BMR * 0.2) / 9);
    console.log("RESULTS(Lose Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

    $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
  }

  if (weightGoalValue == "Maintain weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.3) / 4);
    fats = Math.ceil((BMR * 0.3) / 9);
    console.log("RESULTS(Maintain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

    $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
  }

  if (weightGoalValue == "Gain weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.3) / 4);
    fats = Math.ceil((BMR * 0.3) / 9);
    console.log("RESULTS(Gain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

    $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
  }
}

function calculateMacros() {
  /*This function takes the gender, weight, age, height and activity values from the HTML.
	It then calculates the persons BMR, calorie count and macro split
	The results are shown on the right hand side*/
  var littleNoneActivity = 1.2;
  var lightActivity = 1.375;
  var moderateActivity = 1.55;
  var veryActivity = 1.725;
  var extremelyActivity = 1.9;

  var activityMultiplier = {
    "Little - none": littleNoneActivity,
    "Lightly active": lightActivity,
    "Moderately active": moderateActivity,
    "Very active": veryActivity,
    "Extremely active": extremelyActivity,
  };

  var BMR = 0;

  // STEPS:
  // 1. Calculate base BMR
  // 2. Calculate daily BMR based on level of activity
  // 3. Calculate macro split based on weight goal

  var genderValue = document.querySelector("input[type=radio][name=gender]:checked").value;
  if (genderValue == "Male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log(`Base BMR for ${genderValue} = ${BMR}`);

    var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked").value;
    BMR = BMR * activityMultiplier[activityLevelValue];
    console.log(`Daily BMR for ${genderValue}, ${activityLevelValue} activity = ${BMR}`);
    displayWeightActivity(BMR);
  }

  if (genderValue == "Female") {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    console.log(`Base BMR for ${genderValue} = ${BMR}`);

    var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked").value;
    BMR = BMR * activityMultiplier[activityLevelValue];
    console.log(`Daily BMR for ${genderValue}, ${activityLevelValue} activity = ${BMR}`);
    displayWeightActivity(BMR);
  }
}
function calculateBMI() {
  /* NEED TO ADD COMMENTS */
  // Formula: weight (kg) / [height (m)]^2
  //   The formula for BMI is weight in kilograms divided by height in meters squared. If height has been measured in centimeters, divide by 100 to convert this to meters.
}
function calculateBodyFat() {
  /* NEED TO ADD COMMENTS */
  // Body fat percentage (BFP) formula for adult males:
  //   BFP = 1.20 × BMI + 0.23 × Age - 16.2
  // Body fat percentage (BFP) formula for adult females:
  //   BFP = 1.20 × BMI + 0.23 × Age - 5.4
}
function calculate() {
  /*This function checks to see what radio-button is selected and then
	calls the appropriate function.  For example if the Macro Calculator is checked the calculateMacros
	function is called.*/
  calculateMacros();
}

function showAgeVal(ageValue) {
  console.log(ageValue);
  age = ageValue;
  $("ageTag").innerHTML = "I am " + ageValue + " years old";
}

function showHeightVal(heightValue) {
  console.log(heightValue);
  height = heightValue;
  $("heightTag").innerHTML = "I am " + heightValue + "cm tall";
}

function showWeightVal(weightValue) {
  console.log(weightValue);
  weight = weightValue;
  $("weightTag").innerHTML = "I am " + weightValue + "kg";
}

function updateLabel(radioID) {
  // Gender Select
  if (radioID == 1) {
    console.log("Male gender selected");
    $("maleGenderLabel").classList.add("w3-blue");
    $("femaleGenderLabel").classList.remove("w3-blue");
  }
  if (radioID == 2) {
    console.log("Female gender selected");
    $("maleGenderLabel").classList.remove("w3-blue");
    $("femaleGenderLabel").classList.add("w3-blue");
  }

  // Weight Goal Select
  if (radioID == 3) {
    console.log("Lose weight goal selected");
    $("loseWeightLabel").classList.add("w3-blue");
    $("maintainWeightLabel").classList.remove("w3-blue");
    $("gainWeightLabel").classList.remove("w3-blue");
  }
  if (radioID == 4) {
    console.log("Maintain weight goal selected");
    $("loseWeightLabel").classList.remove("w3-blue");
    $("maintainWeightLabel").classList.add("w3-blue");
    $("gainWeightLabel").classList.remove("w3-blue");
  }
  if (radioID == 5) {
    console.log("Gain weight goal selected");
    $("loseWeightLabel").classList.remove("w3-blue");
    $("maintainWeightLabel").classList.remove("w3-blue");
    $("gainWeightLabel").classList.add("w3-blue");
  }

  // Activity Level Select
  if (radioID == 6) {
    console.log("Little - None activity level selected");
    $("littleNoneActivityLabel").classList.add("w3-blue");
    $("lightlyActivityLabel").classList.remove("w3-blue");
    $("moderatelyAcitivityLabel").classList.remove("w3-blue");
    $("veryActivityLabel").classList.remove("w3-blue");
    $("extremelyActivityLabel").classList.remove("w3-blue");
  }
  if (radioID == 7) {
    console.log("Lightly activity level selected");
    $("littleNoneActivityLabel").classList.remove("w3-blue");
    $("lightlyActivityLabel").classList.add("w3-blue");
    $("moderatelyAcitivityLabel").classList.remove("w3-blue");
    $("veryActivityLabel").classList.remove("w3-blue");
    $("extremelyActivityLabel").classList.remove("w3-blue");
  }
  if (radioID == 8) {
    console.log("Moderately activity level selected");
    $("littleNoneActivityLabel").classList.remove("w3-blue");
    $("lightlyActivityLabel").classList.remove("w3-blue");
    $("moderatelyAcitivityLabel").classList.add("w3-blue");
    $("veryActivityLabel").classList.remove("w3-blue");
    $("extremelyActivityLabel").classList.remove("w3-blue");
  }
  if (radioID == 9) {
    console.log("Very activity level selected");
    $("littleNoneActivityLabel").classList.remove("w3-blue");
    $("lightlyActivityLabel").classList.remove("w3-blue");
    $("moderatelyAcitivityLabel").classList.remove("w3-blue");
    $("veryActivityLabel").classList.add("w3-blue");
    $("extremelyActivityLabel").classList.remove("w3-blue");
  }
  if (radioID == 10) {
    console.log("Extremely level selected");
    $("littleNoneActivityLabel").classList.remove("w3-blue");
    $("lightlyActivityLabel").classList.remove("w3-blue");
    $("moderatelyAcitivityLabel").classList.remove("w3-blue");
    $("veryActivityLabel").classList.remove("w3-blue");
    $("extremelyActivityLabel").classList.add("w3-blue");
  }
}

function genPieChart() {
  $("plotArea").innerHTML = "";
  let xArray = "Carbs, Protein, Fats".split(", ");
  let yArray = [carbs, protein, fats];
  console.log("X data: " + xArray);
  console.log("Y data: " + yArray);
  // Define Data
  var data = [
    {
      labels: xArray,
      values: yArray,
      type: "pie",
    },
  ];
  // Define Layout
  var layout = {
    title: "Results",
    titlefont: { size: 30, color: "red" },
  };
  // Display using Plotly
  Plotly.newPlot("plotArea", data, layout);
}
