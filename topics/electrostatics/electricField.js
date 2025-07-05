function electricField() {
  const qMicroC = parseFloat(select('#charge').value());
  const rCm = parseFloat(select('#distance').value());

  const k = 9e9; // Coulomb's constant
  const q = qMicroC * 1e-6; // Convert to C
  const r = rCm / 100;      // Convert to m

  const E = (k * Math.abs(q)) / (r * r); // Field strength
  const Erounded = E.toExponential(2);

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

  // Test point
  const px = cx + rCm * 3; // Scale distance visually
  const py = cy;

  // Field arrow direction
  stroke('#2c3e50');
  strokeWeight(2);
  const dir = q > 0 ? 1 : -1;
  const arrowLen = 50;
  line(px, py, px + arrowLen * dir, py);
  fill('#2c3e50');
  triangle(
    px + arrowLen * dir,
    py,
    px + (arrowLen - 10) * dir,
    py - 5,
    px + (arrowLen - 10) * dir,
    py + 5
  );

  // Labels
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Charge (q): ${qMicroC} μC`, 20, 30);
  text(`Distance (r): ${rCm} cm`, 20, 50);
  text(`Electric Field (E): ${Erounded} N/C`, 20, 70);

  drawObjectives("Electric Field of a Point Charge", [
    "Visualize electric field direction and magnitude",
    "E = k × |q| / r²",
    "Field is vector: away from +ve, toward -ve",
    "Direction changes with charge polarity"
  ]);
}

window.electricField = electricField;
