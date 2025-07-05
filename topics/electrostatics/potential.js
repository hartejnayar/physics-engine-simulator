function potential() {
  const qMicroC = parseFloat(select('#charge').value());
  const rCm = parseFloat(select('#distance').value());

  const k = 9e9; // Coulomb constant
  const q = qMicroC * 1e-6; // μC to C
  const r = rCm / 100;      // cm to m

  const V = (k * q) / r; // Potential in volts
  const Vrounded = V.toExponential(2);

  background(255);

  // Charge at center
  const cx = width / 2;
  const cy = height / 2;
  fill(q > 0 ? '#e74c3c' : '#3498db');
  noStroke();
  ellipse(cx, cy, 30, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(q > 0 ? '+' : '–', cx, cy);

  // --- Draw concentric equipotential circles ---
  noFill();
  stroke(180);
  strokeWeight(1);
  for (let i = 1; i <= 6; i++) {
    ellipse(cx, cy, i * 50);
  }

  // Test point on one circle
  const visualR = rCm * 3; // Scale for visualization
  const angle = -PI / 4;   // 45° angle to place test point
  const px = cx + visualR * cos(angle);
  const py = cy + visualR * sin(angle);
  fill(0);
  noStroke();
  ellipse(px, py, 10, 10);

  // Label distance line (dashed)
  stroke(0);
  drawingContext.setLineDash([4, 4]);
  line(cx, cy, px, py);
  drawingContext.setLineDash([]);

  // Display info
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Charge (q): ${qMicroC} μC`, 20, 30);
  text(`Distance (r): ${rCm} cm`, 20, 50);
  text(`Electric Potential (V): ${Vrounded}`, 20, 70);

  drawObjectives("Electric Potential Around a Point Charge", [
    "Electric potential is scalar and radial",
    "Equipotential surfaces are concentric circles",
    "V = k × q / r, same at all points on a circle",
    "Test point lies on one equipotential"
  ]);
}

window.potential = potential;
