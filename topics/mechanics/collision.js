let x1 = 200, x2 = 600;
let v1 = 0, v2 = 0;
let collided = false;

function collision() {
  const m1 = parseFloat(select('#mass1').value());
  const m2 = parseFloat(select('#mass2').value());
  const u1 = parseFloat(select('#velocity1').value());
  const u2 = parseFloat(select('#velocity2').value());

  const r1 = 30;  // radius of object 1
  const r2 = 30;  // radius of object 2

  if (!collided) {
    // CLM
    v1 = ((m1 - m2) / (m1 + m2)) * u1 + ((2 * m2) / (m1 + m2)) * u2;
    v2 = ((2 * m1) / (m1 + m2)) * u1 + ((m2 - m1) / (m1 + m2)) * u2;
    collided = true;
    x1 = 200;
    x2 = 600;
  }

  const dt = deltaTime / 1000;
  x1 += v1 * dt * 50;
  x2 += v2 * dt * 50;

  background(255);

  // Draw masses
  fill('#3498db');
  ellipse(x1, height / 2, r1 * 2);
  fill('#e74c3c');
  ellipse(x2, height / 2, r2 * 2);

  // Reset simulation when out of bounds
  if (x1 < -r1 || x1 > width + r1 || x2 < -r2 || x2 > width + r2) {
    collided = false;
  }

  // Labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Mass 1: ${m1} kg`, 20, 20);
  text(`Mass 2: ${m2} kg`, 20, 40);
  text(`Initial Velocities: u₁ = ${u1} m/s, u₂ = ${u2} m/s`, 20, 60);
  if (collided) {
    text(`Final Velocities: v₁ = ${v1.toFixed(2)} m/s, v₂ = ${v2.toFixed(2)} m/s`, 20, 80);
  }

  drawObjectives("Elastic Collision (1D)", [
    "Adjust mass and velocity of both bodies",
    "Observe elastic collision outcome in 1D",
    "Velocities update using momentum and energy conservation",
    "Auto-resets after balls go off-screen"
  ]);
}
