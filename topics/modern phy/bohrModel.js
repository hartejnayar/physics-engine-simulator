function bohrModel() {
  const n = parseInt(select('#n').value());

  background(255);
  textSize(14);
  textAlign(LEFT);
  fill(0);
  text(`Electron Energy Level: n = ${n}`, 20, 30);

  const centerX = width / 2;
  const centerY = height / 2 + 50; // raised slightly

  // Draw nucleus
  fill('#e74c3c');
  noStroke();
  ellipse(centerX, centerY-50, 20, 20);
  fill(255);
  textAlign(CENTER, CENTER);
  text('p⁺', centerX, centerY-50);

  // Draw orbits
  noFill();
  stroke('#bdc3c7');
  strokeWeight(1);
  for (let i = 1; i <= 5; i++) {
    ellipse(centerX, centerY-50, i * 60, i * 60);
  }

  // Draw electron in selected orbit
  const angle = frameCount * 0.02;
  const r = n * 30; // Orbit radius
  const ex = centerX + r * cos(angle);
  const ey = centerY + r * sin(angle)-50;

  fill('#2980b9');
  noStroke();
  ellipse(ex, ey, 12, 12);
  fill(0);
  textAlign(CENTER);
  text("e⁻", ex, ey - 15);

  // Optional: Photon arrow if n > 1
  if (n > 1) {
    stroke('#f1c40f');
    strokeWeight(2);
    line(centerX + 30, centerY-50, centerX + n * 30, centerY-50);
    noStroke();
    fill('#f1c40f');
    text("Photon Absorbed", centerX + (n * 15), centerY - 10);
  }

  drawObjectives("Bohr Model of Hydrogen Atom", [
    "Visualize quantized electron orbits (n = 1 to 5)",
    "Adjust energy level using slider",
    "Electron moves in selected orbit",
    "Photon arrow appears if n > 1 (absorption)"
  ]);
}

window.bohrModel = bohrModel;
