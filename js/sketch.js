const density = "Ñ@#W$?!;:+=-,._ ";
const colors = [
  "#6527BE",
  "#9681EB",
  "#45CFDD",
  "#7d9ddf",
  "#A7EDE7",
  "#FFFFFF",
];
const inc = 0.1;
const scl = 20;

let cols, rows;

let zoff = 0;

function setup() {
  createCanvas(
    document.documentElement.scrollWidth,
    document.documentElement.scrollHeight
  );

  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  background("#061434");
  let yoff = 0;

  for (var y = 0; y < rows; y++) {
    let xoff = 0;
    for (var x = 0; x < cols; x++) {
      let r = map(noise(xoff, yoff, zoff), 0, 1, 0, 255);

      const len = density.length;
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
