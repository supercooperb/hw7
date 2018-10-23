// laugh-1.mp3 was found at http://soundbible.com/1279-Goofy-Laugh.html
// gasp.mp3 was found at http://soundbible.com/809-Sad.html
// laugh-2.mp3 was found at https://freesound.org/people/SoundCollectah/sounds/108928/
// yipee.mp3 was found at https://freesound.org/people/zippi1/sounds/18054/
// sad.mp3 was found at https://freesound.org/people/Julalvr/sounds/429882/
// grrr.mp3 was found at https://freesound.org/people/davidou/sounds/88462/
// meh.mp3 was found at https://freesound.org/people/prucanada/sounds/415363/
// displeased.mp3 was found at https://freesound.org/people/jammaj/sounds/409013/
// oooh.mp3 was found at https://freesound.org/people/Reitanna/sounds/323707/

var laugh;
var gasp;
var smile;
var laugh2;
var sad;
var oooh;
var grumble;
var eh;
var angry;

function preload() {
  soundFormats('mp3', 'ogg');
  laugh = loadSound('assets/laugh-1.mp3');
  gasp = loadSound('assets/gasp.mp3');
  smile = loadSound('assets/yipee.mp3');
  laugh2 = loadSound('assets/laugh-2.mp3');
  sad = loadSound('assets/sad.mp3');
  oooh = loadSound('assets/oooh.mp3');
  grumble = loadSound('assets/displeased.mp3')
  eh = loadSound('assets/meh.mp3')
  angry = loadSound('assets/grrr.mp3')
}

var A = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0]
]

var S = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

var D = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

var F = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1]
]

var G = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

var H = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
]

var J = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0]
]

var K = [
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0]
]

var L = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0]
];

// a circle for every possible dot in the matrix
var circles = [];

function setup() {
  createCanvas(400, 400);
  // for every row...
  for (var r = 0; r < 7; r++) {
    // for every column in that row...
    for (var c = 0; c < 5; c++) {
      // make a circle in a random place
      circles.push({
        x: random(-width, 2 * width), // width/5 * (c + 0.5),
        y: random(-height, 2 * height) // height/7 * (r + 0.5),
      });
    }
  }
}

function draw() {
  background(220);

  // draw every circle
  for (var i = 0; i < circles.length; i++) {
    let circle = circles[i];
    noStroke();
    ellipse(circle.x + random(2), circle.y + random(2), 50);
    if (circle.targetX) {
      circle.x = 0.9 * circle.x + 0.1 * circle.targetX;
    }
    if (circle.targetY) {
      circle.y = 0.9 * circle.y + 0.1 * circle.targetY;
    }
  }
}

function keyPressed() {
  var letter;
  if (key == 'a') {
    letter = A;
    laugh2.play();
  }
  if (key == 's') {
    letter = S;
    smile.play();
  }
  if (key == 'd') {
    letter = D;
    gasp.play();
  }
  if (key == 'f') {
    letter = F;
    sad.play();
  }
  if (key == 'g') {
    letter = G;
    oooh.play();
  }
  if (key == 'h') {
    letter = H;
    grumble.play();
  }
  if (key == 'j') {
    letter = J;
    eh.play();
  }
  if (key == 'k') {
    letter = K;
    angry.play();
  }
  if (key == 'l') {
    letter = L;
    laugh.play();
  }

  // for every row...
  for (var r = 0; r < 7; r++) {
    // for every column in tht row...
    for (var c = 0; c < 5; c++) {
      // get the circle for this location
      let circle = circles[r * 5 + c];
      // here's where the circle should go...
      let x = width / 5 * (c + 0.5);
      let y = height / 7 * (r + 0.5);

      // but do we draw it?
      if (letter[r][c] > 0) {
        // yes! move the circle to the x and y
        circle.targetX = x;
        circle.targetY = y;
      } else {
        // no! change x so that it's offscreen
        if (x < width / 2) {
          x = -50;
        } else {
          x = width + 50;
        }
        circle.targetX = x;
        circle.targetY = y;
      }
    }
  }
}
