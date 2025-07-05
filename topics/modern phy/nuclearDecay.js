// topics/modernPhysics/nuclearDecay.js

function nuclearDecay() {
  const N0 = parseInt(select('#n0').value());        // Initial nuclei
  const hl = parseFloat(select('#hl').value());      // Half-life
  const t = parseFloat(select('#t').value());        // Time elapsed

  const remaining = N0 * Math.pow(0.5, t / hl);       // Decay formula
  const rounded = Math.round(remaining);

  background(255);
  textSize(14);
  fill(0);
  text(`Initial Nuclei (N₀): ${N0}`, 20, 30);
  text(`Half-Life (s): ${hl}`, 20, 50);
  text(`Elapsed Time (s): ${t}`, 20, 70);
  text(`Remaining Nuclei: ${rounded}`, 20, 90);

  // Draw decay curve
  push();
  translate(60, height-150); // Margin

  stroke(0);
  noFill();
  rect(0, -200, 600, 200); // Graph box

  stroke('#27ae60');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i <= 600; i += 2) {
    let time = (i / 600) * 5 * hl; // time in multiples of half-life
    let y = -map(N0 * Math.pow(0.5, time / hl), 0, N0, 0, 200);
    vertex(i, y);
  }
  endShape();

  // Mark current time point
  let tX = map(t, 0, 5 * hl, 0, 600);
  let tY = -map(remaining, 0, N0, 0, 200);
  fill('#e74c3c');
  noStroke();
  ellipse(tX, tY, 10, 10);
  textAlign(CENTER);
  text(`t = ${t}s`, tX, tY - 10);
  pop();

  drawObjectives("Nuclear Decay Simulation", [
    "Simulates exponential decay of radioactive nuclei",
    "N(t) = N₀ × (1/2)^(t / half-life)",
    "Adjust initial count, half-life, and elapsed time",
    "Visualizes decay curve and remaining nuclei"
  ]);
}

window.nuclearDecay = nuclearDecay;
