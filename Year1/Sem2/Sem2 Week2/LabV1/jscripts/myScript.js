alert("Hello, you are welcome to view my page");

function load()
{
    let name = document.getElementById('theName').innerHTML;
    alert("Content of h1 is "+name);
    let userEntry = prompt("What would you like to change the heading to", "Enter text here");
    document.getElementById('theContent').innerHTML = userEntry
}