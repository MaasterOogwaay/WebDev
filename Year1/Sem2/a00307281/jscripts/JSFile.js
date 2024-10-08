// TODO
// Figure out how to decipher which button is selected (DONE)
// Fix the buttons in HTML (DONE)
// Macro calculator for rest of males and all females (DONE)
// BMI calculator
// Change id's of everything || create global variables (OBSELETE)
// Change cells to be like HTML line 100 (DONE)
// updateLabel function - look at PlotlyDemo (DONE)
// Plotly (DONE)

// Instead of radio bar, have bar with dropdown select to choose how you calculate height, weight and dietary type
//L Calculate height (dropdown) | Calculate weight (dropdown) | Dietary type (dropdown)
// Select menu to choose height in either CM, Feet Inches, Metres
// L Based on select, remove slider and replace with input field(s)
// Select menu to choose weight in either Kg, Pounds, Stone
// L Based on select, remove slider and replace with input field(s)

// Array of meals based on macro results
// L Button with list of high carbs/protein/fat || high carbs/protein/fat meals
// L if value>100 high else low
// Possible
// https://www.prospre.io/meal-plans?cals=3001&p=225&f=100&c=300&diet=normal
// L replace values with values calculator gets
// L Diet select

var weight = 0;
var height = 0;
var age = 0;
var carbs = 0;
var protein = 0;
var fats = 0;
// var BMR = 0;

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  $("Calculate").onclick = function () {
    calculate();
    genPieChart();
  };
  $("cmSliderRow").style.display = "table-row";
  $("feetInchesRow").style.display = "none";
  $("metresCMRow").style.display = "none";

  $("kilogramsRow").style.display = "table-row";
  $("poundsRow").style.display = "none";
  $("stonesRow").style.display = "none";

  $("mealPlanDiv").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
  calculateHeightType();
  weightHeightType();
});

// https://medium.com/@ecastille924/using-javascript-to-update-the-dom-on-dropdown-selection-one-example-bf5f1c53bead
function weightHeightType() {
  var weightOption = $("calculateWeightOption");
  weightOption.addEventListener("change", function () {
    weightOption.value;
    console.log(weightOption.value);
    var option = weightOption.value;

    if (option === "kilograms") {
      $("kilogramsRow").style.display = "table-row";
      $("poundsRow").style.display = "none";
      $("stonesRow").style.display = "none";
    }
    if (option === "pounds") {
      $("kilogramsRow").style.display = "none";
      $("poundsRow").style.display = "table-row";
      $("stonesRow").style.display = "none";
    }
    if (option === "stones") {
      $("kilogramsRow").style.display = "none";
      $("poundsRow").style.display = "none";
      $("stonesRow").style.display = "table-row";
    }
  });
}

function calculateWeight() {
  var weightOption = $("calculateWeightOption");
  console.log(weightOption.value);

  if (weightOption.value === "pounds") {
    if (isNaN(parseInt($("poundsWeight").value))) {
      alert("The weight values you entered must be numerical");
    } else {
      weight = Math.floor(parseInt($("poundsWeight").value) * 0.45359237);
      console.log("Total pound weight in kg = " + weight);

      $("weightTag").innerHTML = "I am " + $("poundsWeight").value + " pounds";
    }
  }

  if (weightOption.value === "stones") {
    if (isNaN(parseInt($("stonesWeight").value))) {
      alert("The weight values you entered must be numerical");
    } else {
      weight = Math.floor(parseInt($("stonesWeight").value) * 6.35);
      console.log("Total stone weight in kg = " + weight);

      $("weightTag").innerHTML = "I am " + $("stonesWeight").value + " stones";
    }
  }
}

function calculateHeightType() {
  var heightOption = $("calculateHeightOption");
  heightOption.addEventListener("change", function () {
    heightOption.value;
    console.log(heightOption.value);
    var option = heightOption.value;

    if (option === "centimetres") {
      $("cmSliderRow").style.display = "table-row";
      $("feetInchesRow").style.display = "none";
      $("metresCMRow").style.display = "none";
    }
    if (option === "feetInches") {
      $("cmSliderRow").style.display = "none";
      $("feetInchesRow").style.display = "table-row";
      $("metresCMRow").style.display = "none";
    }
    if (option === "metres") {
      $("cmSliderRow").style.display = "none";
      $("feetInchesRow").style.display = "none";
      $("metresCMRow").style.display = "table-row";
    }
  });
}

function calculateHeight() {
  var heightOption = $("calculateHeightOption");
  console.log(heightOption.value);

  if (heightOption.value === "feetInches") {
    console.log("feetHeight = " + $("feetHeight").value);
    console.log("inchesHeight = " + $("inchesHeight").value);

    if (isNaN(parseInt($("feetHeight").value)) || isNaN(parseInt($("inchesHeight").value))) {
      alert("The height values you entered must be numerical");
    } else {
      height = Math.floor(parseInt($("feetHeight").value) * 30.4 + parseInt($("inchesHeight").value) * 2.54);
      console.log("Total feetInches in cm = " + height);

      $("heightTag").innerHTML = "I am " + $("feetHeight").value + "ft " + $("inchesHeight").value + " inches tall";
    }
  }

  if (heightOption.value === "metres") {
    console.log("metresHeight = " + $("metresHeight").value);
    console.log("cmHeight = " + $("cmHeight").value);

    if (isNaN(parseInt($("metresHeight").value)) || isNaN(parseInt($("cmHeight").value))) {
      alert("The height values you entered must be numerical");
    } else {
      height = Math.floor(parseInt($("metresHeight").value) * 100 + parseInt($("cmHeight").value));
      console.log("Total metres in cm = " + height);

      $("heightTag").innerHTML = "I am " + $("metresHeight").value + " metres " + $("cmHeight").value + " cm tall";
    }
  }
}

function displayWeightActivity(BMR) {
  var genderValue = document.querySelector("input[type=radio][name=gender]:checked")?.value;
  var weightGoalValue = document.querySelector("input[type=radio][name=weightGoal]:checked")?.value;
  var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked")?.value;

  if (weightGoalValue == "Lose weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.4) / 4);
    fats = Math.ceil((BMR * 0.2) / 9);
    console.log("RESULTS(Lose Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");
    changeMacroCardValues();
  }

  if (weightGoalValue == "Maintain weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.3) / 4);
    fats = Math.ceil((BMR * 0.3) / 9);
    console.log("RESULTS(Maintain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");
    changeMacroCardValues();
  }

  if (weightGoalValue == "Gain weight") {
    console.log(`Calculating macro split for ${genderValue}, ${activityLevelValue}, ${weightGoalValue}`);
    carbs = Math.ceil((BMR * 0.4) / 4);
    protein = Math.ceil((BMR * 0.3) / 4);
    fats = Math.ceil((BMR * 0.3) / 9);
    console.log("RESULTS(Gain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");
    changeMacroCardValues();
  }
}

function changeMacroCardValues() {
  // Updates the cards with the macro values
  $("carbsMacroCardValue").innerHTML = carbs + "g";
  $("proteinMacroCardValue").innerHTML = protein + "g";
  $("fatsMacroCardValue").innerHTML = fats + "g";
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

  // STEPS:
  // 1. Calculate base BMR
  // 2. Calculate daily BMR based on level of activity
  // 3. Calculate macro split based on weight goal

  // ? - gimme .value but no error if null
  var genderValue = document.querySelector("input[type=radio][name=gender]:checked")?.value;
  if (genderValue) {
    console.log("Gender was selected");
  } else {
    return alert("Gender wasn't selected");
  }

  if (genderValue == "Male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log(`Base BMR for ${genderValue} = ${BMR}`);

    var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked")?.value;
    if (activityLevelValue) {
      console.log("Activity Level was selected");
    } else {
      return alert("Activity Level wasn't selected");
    }
    BMR = BMR * activityMultiplier[activityLevelValue];
    console.log(`Daily BMR for ${genderValue}, ${activityLevelValue} activity = ${BMR}`);
    displayWeightActivity(BMR);
  }

  if (genderValue == "Female") {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    console.log(`Base BMR for ${genderValue} = ${BMR}`);

    var activityLevelValue = document.querySelector("input[type=radio][name=activityLevel]:checked").value;
    if (activityLevelValue) {
      console.log("Activity Level was selected");
    } else {
      return alert("Activity Level wasn't selected");
    }
    BMR = BMR * activityMultiplier[activityLevelValue];
    console.log(`Daily BMR for ${genderValue}, ${activityLevelValue} activity = ${BMR}`);
    displayWeightActivity(BMR);
  }
}

function calculate() {
  /*This function checks to see what radio-button is selected and then
	calls the appropriate function.  For example if the Macro Calculator is checked the calculateMacros
	function is called.*/
  calculateHeight();
  calculateWeight();
  calculateMacros();
  searchMealPlan();
  $("mealPlanDiv").style.display = "block";
}

function showAgeVal(ageValue) {
  console.log(ageValue);
  age = ageValue;
  $("ageTag").innerHTML = "I am " + ageValue + " years old";
}

function showHeightVal(heightValue) {
  console.log(heightValue);
  // if statement checking which is selected
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

// https://www.prospre.io/meal-plans?cals=1637&p=102&f=55&c=184&diet=normal
// https://www.prospre.io/meal-plans?cals=3001&p=225&f=100&c=300&diet=normal
function searchMealPlan() {
  var dietaryType = $("dietaryType").value;
  console.log(`Dietary type: ${dietaryType}`);
  var diet = "";
  if (dietaryType == "normal") {
    diet = "normal";
    console.log("diet set to normal");
  }
  if (dietaryType == "vegetarian") {
    diet = "vegetarian";
    console.log("diet set to vegetarian");
  }
  if (dietaryType == "vegan") {
    diet = "vegan";
    console.log("diet set to vegan");
  }

  var link = `https://www.prospre.io/meal-plans?cals=${BMR}&p=${protein}&f=${fats}&c=${carbs}&diet=${diet}`;
  $("mealPlanLink").href = link;
}
