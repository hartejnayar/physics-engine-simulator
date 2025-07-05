function coulombsLaw() {
  const q1MicroC = parseFloat(select('#q1').value());
  const q2MicroC = parseFloat(select('#q2').value());
  const rCm = parseFloat(select('#distance').value());

  const k = 9e9;
  const q1 = q1MicroC * 1e-6;
  const q2 = q2MicroC * 1e-6;
  const r = rCm / 100;

  const F = (k * Math.abs(q1 * q2)) / (r * r);
  const Frounded = F.toExponential(2);

  background(255);

  // Positioning
  const cx1 = width / 2 - rCm * 1.5;
  const cx2 = width / 2 + rCm * 1.5;
  const cy = height / 2;

  // Draw charges
  noStroke();
  fill(q1 > 0 ? '#e74c3c' : '#3498db');
  ellipse(cx1, cy, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(q1 > 0 ? '+' : '–', cx1, cy);

  fill(q2 > 0 ? '#e74c3c' : '#3498db');
  ellipse(cx2, cy, 30);
  fill(255);
  text(q2 > 0 ? '+' : '–', cx2, cy);

  // Draw force arrows
  stroke('#2c3e50');
  strokeWeight(2);
  const repelling = q1 * q2 > 0;

  // On q1
  let arrow1X = cx1;
  let arrow2X = cx2;
  let arrowDir = repelling ? -1 : 1;

  line(cx1, cy, cx1 + 50 * arrowDir, cy);
  fill('#2c3e50');
  triangle(cx1 + 50 * arrowDir, cy, cx1 + 40 * arrowDir, cy - 5, cx1 + 40 * arrowDir, cy + 5);

  // On q2 (opposite)
  arrowDir *= -1;
  line(cx2, cy, cx2 + 50 * arrowDir, cy);
  triangle(cx2 + 50 * arrowDir, cy, cx2 + 40 * arrowDir, cy - 5, cx2 + 40 * arrowDir, cy + 5);

  // Display labels
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Charge 1 (q₁): ${q1MicroC} μC`, 20, 30);
  text(`Charge 2 (q₂): ${q2MicroC} μC`, 20, 50);
  text(`Distance (r): ${rCm} cm`, 20, 70);
  text(`Electrostatic Force (F): ${Frounded} N`, 20, 90);

  drawObjectives("Coulomb’s Law - Force Between Two Charges", [
    "Visualize force of attraction or repulsion",
    "F = k × |q₁ × q₂| / r²",
    "Direction shown with arrows",
    "Force increases with charge, decreases with distance"
  ]);
}

window.coulombsLaw = coulombsLaw;
