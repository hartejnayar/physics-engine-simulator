let blockWEP;
let wepStartTime;
let wepDisplacementPixels;
let wepStartX;
let wepAnimating = false;

function workEnergyPower() {
  const F = parseFloat(select('#force').value());
  const d = parseFloat(select('#displacement').value());

  const scale = 5; // 1 meter = 5 pixels
  wepDisplacementPixels = d * scale;

  const groundY = height - 200;   // SHIFTED GROUND
  const blockY = height - 230;    // SHIFTED BLOCK

  background(255);

  // Draw ground
  stroke(0);
  strokeWeight(1);
  line(50, groundY, width - 50, groundY);

  // Setup block
  if (!blockWEP || !wepAnimating) {
    blockWEP = {
      x: 80,
      y: blockY,
      w: 50,
      h: 30
    };
    wepStartX = blockWEP.x;
    wepStartTime = millis();
    wepAnimating = true;
  }

  // Animate block
  const t = (millis() - wepStartTime) / 1000;
  const speed = wepDisplacementPixels / 2;
  const dx = speed * t;

  if (dx < wepDisplacementPixels) {
    blockWEP.x = wepStartX + dx;
  } else {
    blockWEP.x = wepStartX + wepDisplacementPixels;
    wepAnimating = false;
  }

  // Draw block
  fill('#3498db');
  rect(blockWEP.x, blockWEP.y, blockWEP.w, blockWEP.h);

  // Draw force arrow
  if (wepAnimating) {
    stroke('#e74c3c');
    strokeWeight(3);
    line(
      blockWEP.x + blockWEP.w,
      blockWEP.y + blockWEP.h / 2,
      blockWEP.x + blockWEP.w + 40,
      blockWEP.y + blockWEP.h / 2
    );
    fill('#e74c3c');
    noStroke();
    triangle(
      blockWEP.x + blockWEP.w + 40, blockWEP.y + blockWEP.h / 2,
      blockWEP.x + blockWEP.w + 30, blockWEP.y + blockWEP.h / 2 - 5,
      blockWEP.x + blockWEP.w + 30, blockWEP.y + blockWEP.h / 2 + 5
    );
  }

  // Calculations
  const work = F * d;
  const timeTaken = 2;
  const power = work / timeTaken;

  // Display values
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Force Applied: ${F} N`, 20, 30);
  text(`Displacement: ${d} m`, 20, 50);
  text(`Work Done: ${work.toFixed(2)} J`, 20, 70);
  text(`Time Taken: ${timeTaken} s`, 20, 90);
  text(`Power: ${power.toFixed(2)} W`, 20, 110);

  drawObjectives("Work, Energy and Power", [
    "Visualize a block pushed with a constant force",
    "Adjust force and displacement using sliders",
    "Calculate and display the work done",
    "Estimate average power from time taken"
  ]);
}
