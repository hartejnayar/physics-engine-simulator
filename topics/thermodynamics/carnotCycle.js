function carnotCycle() {
  const T1 = parseFloat(select('#T1').value()); // Hot reservoir
  const T2 = parseFloat(select('#T2').value()); // Cold reservoir

  const Qh = 1000; // Heat absorbed from hot reservoir (arbitrary unit)
  const efficiency = 1 - (T2 / T1);
  const W = Qh * efficiency;
  const Qc = Qh - W;

  background(255);

  // Labels and numbers
  textSize(14);
  fill(0);
  text(`T₁ (Hot Reservoir): ${T1} K`, 20, 30);
  text(`T₂ (Cold Reservoir): ${T2} K`, 20, 50);
  text(`Heat Absorbed (Qₕ): ${Qh.toFixed(1)} J`, 20, 70);
  text(`Heat Rejected (Q𝒸): ${Qc.toFixed(1)} J`, 20, 90);
  text(`Work Done (W): ${W.toFixed(1)} J`, 20, 110);
  text(`Efficiency: ${(efficiency * 100).toFixed(1)} %`, 20, 130);

  // Animation - simulate piston movement
  const cycleTime = millis() / 1000;
  const pistonOffset = Math.sin(cycleTime * 2 * Math.PI) * 20;

  // Draw reservoirs
  fill('#e74c3c');
  rect(600, 300, 80, 30);
  fill(255);
  text("Hot", 640, 320);

  fill('#3498db');
  rect(600, 400, 80, 30);
  fill(255);
  text("Cold", 640, 420);

  // Engine chamber
  fill(200);
  rect(300, 350, 80, 80);

  // Piston
  fill('#95a5a6');
  rect(300, 390 - pistonOffset, 80, 20);

  // Heat Arrows
  stroke('#e67e22');
  strokeWeight(3);
  drawArrow(600, 315, 380, 340, "Qh");

  stroke('#2980b9');
  drawArrow(380, 430, 600, 415, "Qc");

  stroke('#2ecc71');
  drawArrow(340, 340, 340, 250, "W");

  drawObjectives("Carnot Cycle", [
    "Simulates a Carnot heat engine using two temperature reservoirs",
    "Shows heat absorbed, rejected, and work done",
    "Efficiency = 1 - T₂ / T₁ (ideal reversible engine)",
    "Visual piston motion and energy flow arrows"
  ]);
}

window.carnotCycle = carnotCycle;

function drawArrow(x1, y1, x2, y2, label) {
  line(x1, y1, x2, y2);
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 7;
  push();
  translate(x2, y2);
  rotate(angle);
  triangle(0, 0, -size, size / 2, -size, -size / 2);
  pop();

  noStroke();
  fill(0);
  textSize(12);
  text(label, (x1 + x2) / 2, (y1 + y2) / 2 - 10);
}
