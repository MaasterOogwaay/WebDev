// TODO
// Figure out how to decipher which button is selected
// Fix the buttons in HTML
// Macro calculator for rest of males and all females
// BMI calculator
// Body fat calculator

var weight = 0;
var height = 0;
var age = 0;

var $ = function (id) {
  return document.getElementById(id);
};
function ResetTextfields() {
  $("width").value = "";
  $("length").value = "";
  $("height").value = "";
  $("radius").value = "";
  $("resultPara").innerHTML =
    "Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
}
window.onload = function () {
  $("calculate").onclick = function () {
    calculate();
  };
  $("reset").onclick = function () {
    ResetTextfields();
  };
};

function SetFields(id) {
  /*This function takes an id which is an integer as a parameter.
	This is parameter is passed from the radio buttons in the HTML file.
  e.g If the id is 1, then the Macros calculator is shown*/
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
  var BMR = 0;
  var carbs = 0;
  var protein = 0;
  var fats = 0;

  // STEPS:
  // 1. Calculate base BMR
  // 2. Calculate daily BMR based on level of activity
  // 3. Calculate macro split based on weight goal

  if ($("gender").value == "Male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    console.log("Base BMR for male = " + BMR);

    // little - no activity
    if ($("activityLevel").value == "Little - none") {
      BMR = BMR * littleNoneActivity;
      console.log("Daily BMR for male, little - none activity =" + BMR);
      if ($("weightGoal").value == "Lose weight") {
        console.log("Calculating macro split for male, little activity, weight loss");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.4) / 4);
        fats = Math.ceil((BMR * 0.2) / 9);
        console.log("RESULTS(Lose Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
      if ($("weightGoal").value == "Maintain weight") {
        console.log("Calculating macro split for male, little activity, maintain weight");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.3) / 4);
        fats = Math.ceil((BMR * 0.3) / 9);
        console.log("RESULTS(Maintain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
      if ($("weightGoal").value == "Gain weight") {
        console.log("Calculating macro split for male, little activity, gain weight");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.3) / 4);
        fats = Math.ceil((BMR * 0.3) / 9);
        console.log("RESULTS(Gain weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
    }

    // light activity
    if ($("activityLevel").value == "Lightly active") {
      BMR = BMR * lightActivity;
      console.log("Daily BMR for male, lightly active =" + BMR);
      if ($("weightGoal").value == "Lose weight") {
        console.log("Calculating macro split for male, light activity, weight loss");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.4) / 4);
        fats = Math.ceil((BMR * 0.2) / 9);
        console.log("RESULTS(Lose Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
      if ($("weightGoal").value == "Maintain weight") {
        console.log("Calculating macro split for male, light activity, maintain weight");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.3) / 4);
        fats = Math.ceil((BMR * 0.3) / 9);
        console.log("RESULTS(Maintain Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
      if ($("weightGoal").value == "Gain weight") {
        console.log("Calculating macro split for male, light activity, gain weight");
        carbs = Math.ceil((BMR * 0.4) / 4);
        protein = Math.ceil((BMR * 0.3) / 4);
        fats = Math.ceil((BMR * 0.3) / 9);
        console.log("RESULTS(Gain Weight): carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g");

        $("resultPara").innerHTML = "carbs: " + carbs + "g protein: " + protein + "g fats: " + fats + "g";
      }
    }
  }
}
function calculateBMI() {
  /* NEED TO ADD COMMENTS */
}
function calculateBodyFat() {
  /* NEED TO ADD COMMENTS */
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
