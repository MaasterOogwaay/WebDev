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

var loopThroughMap = (cb) => {
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      cb(x, y, map[y][x]);
    }
  }
};

var numberBlocks = () => {
  var number;
  for (var y = 0; y < width; y++) {
    for (var x = 0; x < width; x++) {
      number = 0;

      if (!map[y][x][3]) {
        for (var i = y - 1; i <= y + 1; i++) {
          for (var j = x - 1; j <= x + 1; j++) {
            if (inMap(j, i)) {
              if (!(i === y && j === x)) {
                if (map[i][j][3]) {
                  number++;
                }
              }
            }
          }
        }
        map[y][y][2] = number;
      }
    }
  }
};
