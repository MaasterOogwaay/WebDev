function UpdateData() {
    var name = prompt("Please enter your name");
    var age = prompt("Please enter your age");
    var height = prompt("Please enter your height");

    height = height*30.48;

    var titleDetails = "Some information on "+name;

    document.getElementById("theTitle").innerHTML = titleDetails;
    document.getElementById("theName").innerHTML = name;
    document.getElementById("theAge").innerHTML = age;
    document.getElementById("theHeight").innerHTML = (height).toFixed(2);
}