function $(id) {
  return document.getElementById(id);
}

function placeCoin() {
  if ($("pos1")) {
    document.getElementById("pos1").innerHTML = `<img src="images/red_coin.png"/>`;
  }
  if ($("pos2")) {
    document.getElementById("pos2").innerHTML = `<img src="images/red_coin.png"/>`;
  }
}

function placeCoin2() {
    
}
