/*These are your global variables*/
let position = 0;
let userPos = 0;
let userGoes = 0;
let barWidth = 0;
let userEntries = [];

/*Standard $ function to minimise the time returning document.getElementById (id)*/
function $(id) {
    return document.getElementById(id);
};

/* guessNumber Function()
    In this function the following must be coded
	1. set the global position variable to be a random number between 1 and 9
	2. Print it out to the console.
*/
function guessNumber() {
    position = Math.floor(Math.random() * 9) + 1;
    console.log("X located at: "+position);
};

/* Resetboard Function()
    In this function the following must be coded
	1. Reset all global variable to 0
	2. Reset the grid and clear all the correct and incorrect images from it
	3. Reset the progress bar back to 1%
	4. Enable the Submit random button 
    5. Disable the New Game button
    6. Reset the innerHTML of result "
    7. Generate a new random position on the board
*/
function resetBoard() {
    // 1.
    position = 0;
    userPos = 0;
    userGoes = 0;
    barWidth = 0;
    userEntries = [];
    // 2.
    $("pos1").innerHTML = "";
    $("pos2").innerHTML = "";
    $("pos3").innerHTML = "";
    $("pos4").innerHTML = "";
    $("pos5").innerHTML = "";
    $("pos6").innerHTML = "";
    $("pos7").innerHTML = "";
    $("pos8").innerHTML = "";
    $("pos9").innerHTML = "";

    //3. 
    $("proBar").style.width = (1) + '%';

    // 4. && 5.
    $("submit").disabled = false;
    $("newGame").disabled = true;

    // 6.
    $("result").innerHTML = "";
    $("userChoice").value = "";

    //7.
    guessNumber();
}

/* checkPosition Function()
    In this function the following must be coded
	1. Get the userChoice from the HTML and store it in userPos
	2. Check to ssee if userPos is NaN,  greater than 9 and less than 0, if so then aler the user that they have to put in numerical data between 1 and 9
    3. Otherwise,
        Check to see IF this is equal to the position variable, if so then set the innerHTML of  result to say Sorry, better luck next time
        3.1 insert the red x image into that position
        3.2 disable the Submit button
        3.3 enable the New Game button
        else, check to see if the userPos exists in the array, refer to the following for a tip
        https://bobbyhadz.com/blog/javascript-array-push-if-not-exist
        3.4 IFit doesnt exist in the array then add it to it
        3.5 increase the width of the progression bar by .5%
        3.6 Insert a green check image into the position
        3.7 If the player gets 8 correct answers then they win.  Endable the New Game button and disable the Submit button and update the innerHTML of result to say Congratualtions, you have won.
        3.8 ELSE alert the player that they have already selected that position 
*/
function checkPosition() {
    // 1.
    userPos = $("userChoice").value
    console.log("userPos = "+userPos);
    //2
    if (isNaN(userPos) || userPos > 9 || userPos <= 0) {
        alert("You must enter a numerical value between 1 and 9!");
    } else {
        if (userPos == position) {
            $("result").innerHTML = "Sorry, better luck next time!";
            console.log("User lost");
            $("submit").disabled = true;
            $("newGame").disabled = false;

            if (position == 1) $("pos1").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 2) $("pos2").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 3) $("pos3").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 4) $("pos4").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 5) $("pos5").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 6) $("pos6").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 7) $("pos7").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 8) $("pos8").innerHTML = `<img src="images/wrong.png"/>`;
            if (position == 9) $("pos9").innerHTML = `<img src="images/wrong.png"/>`;

        } else {
            if (!userEntries.includes(userPos)) {
                userEntries.push(userPos);
                console.log(userEntries);
                if (userPos == 1) {
                    $("pos1").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 2) {
                    $("pos2").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 3) {
                    $("pos3").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 4) {
                    $("pos4").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 5) {
                    $("pos5").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 6) {
                    $("pos6").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 7) {
                    $("pos7").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 8) {
                    $("pos8").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }
                if (userPos == 9) {
                    $("pos9").innerHTML = `<img src="images/check.png"/>`;
                    $("proBar").style.width = (barWidth += 12.5) + '%';
                }

                if (userEntries.length == 8) {
                    $("result").innerHTML = "You won!";
                    console.log("User won");
                    $("submit").disabled = true;
                    $("newGame").disabled = false;
                }
            } else {
                alert("You have already entered that number!");
            }
        }
    }
}

/* window.onload Function()
    In this function the following must be coded
    1. Call the guessNumber() function to enerate a new number
    2. When the submit button is clicked it calls the checkPositino() function
    3. When the newGame button is clicked it calls the resetBoard function
*/
window.onload = function () {
    guessNumber();
    $("submit").onclick = function () { checkPosition(); }
    $("newGame").onclick = function () { resetBoard(); }
}
