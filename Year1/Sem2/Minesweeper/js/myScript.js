var width = 20;
var height = 20;
var maxMines = 50;
var map = [];
var gameStarted = 0;

var getRandomInt = (max, min) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(math.random() * (max - min)) + min;
};

var generateMines = (x, y) => {
  var mines = 0;
  var position;

  while (mines < maxMines) {
    position = [getRandomInt(0, height - 1), getRandomInt(0, width - 1)];
    if (position[0] !== y && position[1] !== x) {
      map[position[0]][position[1]][3] = 1;
      mines++;
    }
  }

  numberBlocks;
};
