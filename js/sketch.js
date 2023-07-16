//const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
const density = "@$#*!=;:~-,.";
//const density = "/\\MXYZabc!?=-. ";
//const density = "#WX?*:÷×+=-· ";
const inc = 0.08;
const scl = 15;

let cols, rows;

let zoff = 0;

const screenWidth = document.documentElement.scrollWidth;
const screenHeight = document.documentElement.scrollHeight;

function setup() {
  cols = floor(screenWidth / scl);
  rows = floor(screenHeight / scl);

  createCanvas(cols * scl, rows * scl);
}

function draw() {
  background("#061434");
  let yoff = 0;

  for (var y = 0; y < rows; y++) {
    let xoff = 0;
    for (var x = 0; x < cols; x++) {
      let r = map(noise(xoff, yoff, zoff), 0.2, 1, 0, 255);

      const len = density.length - 1;
      const charIndex = floor(map(r, 0, 255, len, 0));

      noStroke();
      fill("#7d9ddf");
      textSize(scl * 0.8);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), x * scl + scl * 0.5, y * scl + scl * 0.5);

      xoff += inc;
    }
    yoff += inc;

    zoff += 0.00015;
  }
}
