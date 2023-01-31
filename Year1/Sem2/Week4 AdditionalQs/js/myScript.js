function UpdateData() {
  let nameParam = prompt("Please enter a name");
  let ageParam = prompt("Please enter an age");
  let addressParam1 = prompt("Please enter address line 1");
  let addressParam2 = prompt("Please enter address line 2");
  let countryParam = prompt("Please enter a country");

  document.getElementById("nameParam").innerHTML = nameParam;
  document.getElementById("ageParam").innerHTML = ageParam;
  document.getElementById("addressParam1").innerHTML = addressParam1;
  document.getElementById("addressParam2").innerHTML = addressParam2;
  document.getElementById("countryParam").innerHTML = countryParam;
}

function UpdateBGColor() {
  let val1 = prompt("Insert the first value");
  let val2 = prompt("Insert the second value");
  let val3 = prompt("Insert the third value");

  if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
    document.write("The values you entered are incorrect\nPlease enter numerical values");
  } else if (val1 > 255 || val1 < 0 || val2 > 255 || val2 < 0 || val3 > 255 || val3 < 0) {
    document.write("The values are incorrect\nPlease enter numerical values between 0 and 255");
  } else {
    document.write("The values you enter are correct!");

    let color = "rgb(" + val1 + "," + val2 + "," + val3 + ")";

    document.body.style.backgroundColor = color;
  }

  // document.body.style.backgroundColor = rgb(255, 0, 0);
}
