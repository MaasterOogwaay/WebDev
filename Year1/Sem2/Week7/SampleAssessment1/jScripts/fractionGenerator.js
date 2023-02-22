//These are my global variables
var a = 0,
  b = 0,
  c = 0,
  d = 0,
  num = 0,
  denum = 0,
  add = 0,
  sub = 0,
  mult = 0,
  div = 0;

/*Standard $ function to return document.getElementById (id)*/
$ = function (id) {
  return document.getElementById(id);
};

/* Standard function to reset fields and nodes with
	the id's in quotes.  Make sure to check the HTML to ensure that they match
*/
ResetTextFields = function () {
  console.log("Resetting fields");
  $("a").innerHTML = "a";
  $("b").innerHTML = "b";
  $("c").innerHTML = "c";
  $("d").innerHTML = "d";
  $("num").innerHTML = "";
  $("denum").innerHTML = "";
  $("resultPara").innerHTML = "When entering your asnwer please make sure to enter integer values only";
};

/* GenerateQuestion Function()
    In this function the following must be coded
	1. Call the ResetTextFields() function to clear the current data
	2. Create 4 random variables between 1 and 10 and store each in the global variables a, b, c, d
	3. update the DOM for the id fields a, b, c and d with the correstponding newly generated random values
*/
GenerateQuestion = function () {
  ResetTextFields();
  console.log("Generating Numbers!");
  a = Math.floor(Math.random() * 10 + 1);
  b = Math.floor(Math.random() * 10 + 1);
  c = Math.floor(Math.random() * 10 + 1);
  d = Math.floor(Math.random() * 10 + 1);

  $("a").innerHTML = a;
  $("b").innerHTML = b;
  $("c").innerHTML = c;
  $("d").innerHTML = d;
};

/* checkOperation Function()
    In this function the following must be coded
	1. Check to see what radio button is checked on the HTML page.
		- If add is checked return 1
		- If sub is checked return 2
		- If div is checked return 3
		- If mult is checked return 4
	IMPORTANT make sure the check that your spelling is correct when you check the operation id and value coming back from the web page
*/
checkOperation = function () {
  console.log("Checking operator");
  if ($("operation").value == "add") {
    return 1;
  }
  if ($("operation").value == "sub") {
    return 2;
  }
  if ($("operation").value == "div") {
    return 3;
  }
  if ($("operation").value == "mult") {
    return 4;
  }
};

/* calculate Function()
    This function has the most code in this file.  In this function the following must be coded
	1. Update the global variables num and denum with the values from the HTML page, e.g. num = parseInt($("num").value); 
	2. Check to see if each is NaN or are less than 1, if so then alert the user to enter correct numerical values greater than 1
	3. If they are valid numerical values then
		-Create two variables called numRES and denumRES that will store the result of the num and denum based on the user entry.
		- Create a variable called operation.  This variable will call the checkOperation function and be updated depengind on what oeration was selected i.e. var operation = checkOperation();
		- Print this out to the console to check your status
		- If operation == 1 then add the fractions calculating the numerator and denumerator seperately
		- If operation == 2 then subtract the fractions calculating the numerator and denumerator seperately
		- If operation == 3 then multiply the fractions calculating the numerator and denumerator seperately
		- If operation == 4 then divide the fractions calculating the numerator and denumerator seperately

		- Create a variable called places that takes the number of decimal places selected by the user from the HTML page
		- Create a variable called result that will store the result of the fraction calculation fixed to the set number of decimal places
		- Check that the num is equal to numRES and denum is equal to  denumRES and if so update the DOM based on the screenshots for example f(num==numRES && denum==denumRES){
		- Otherwise update the dom to say that the result is incorrect.
*/
calculate = function () {
  console.log("Calculating answer!");
  num = parseInt($("num").value);
  denum = parseInt($("denum").value);

  if (isNaN(num) || isNaN(denum) || num < 1 || denum < 1) {
    console.log("Values were incorrect");
    alert("The values you entered must be numerical and/or greater than 1");
  } else {
    var numRES = num;
    var denumRES = denum;
    var result = 0;
    var numerator = 0;
    var denumerator = 0;
    var operation = checkOperation();

    if (operation == 1) {
      numerator = a + c;
      denumerator = b + d;
      result = numerator / denumerator;
    }
    if (operation == 2) {
      // result = (a + b) / (c + d);  !!! NEED TO DO
    }
    if (operation == 3) {
      numerator = a * d;
      denumerator = b * c;
      result = numerator / denumerator;
    }
    if (operation == 4) {
      numerator = a * c;
      denumerator = b * d;
      result = numerator / denumerator;
    }

    var places = $("places").value;
    if (places == 2) {
      if (numRES == numerator && denumRES == denumerator) {
        result = result.toFixed(2);
        $("resultPara").innerHTML = "CORRECT! The answer is: " + result;
      } else {
        result = result.toFixed(2);
        $("resultPara").innerHTML = "WRONG! The answer is: " + result;
      }
    }
    if (places == 3) {
      if (numRES == numerator && denumRES == denumerator) {
        result = result.toFixed(3);
        $("resultPara").innerHTML = "CORRECT! The answer is: " + result;
      } else {
        result = result.toFixed(3);
        $("resultPara").innerHTML = "WRONG! The answer is: " + result;
      }
    }
    if (places == 4) {
      if (numRES == numerator && denumRES == denumerator) {
        result = result.toFixed(4);
        $("resultPara").innerHTML = "CORRECT! The answer is: " + result;
      } else {
        result = result.toFixed(4);
        $("resultPara").innerHTML = "WRONG! The answer is: " + result;
      }
    }
    console.log(result);
  }
};

/* window.onload Function()
    In this function the following must be coded
	1. Call the GenerateQuesion() function.
    1. When the calc button is clicked it calls the Calculate function
    2. When the reset button is clicked it calls the GenerateQuestion function
*/
window.onload = function () {
  GenerateQuestion();
  $("reset").onclick = function () {
    GenerateQuestion();
  };
  $("calc").onclick = function () {
    calculate();
  };
};
