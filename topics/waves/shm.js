
let startTimeSHM = 0;

function shm() {
  const A = parseFloat(select('#amplitude').value()); // amplitude in px
  const omega = parseFloat(select('#omega').value()); // angular frequency

  const x0 = width / 2;
  const y = height / 2;
  const massSize = 40;

  // Time since simulation started
  if (startTimeSHM === 0) startTimeSHM = millis();
  const t = (millis() - startTimeSHM) / 1000; // in seconds

  // SHM Equation: x(t) = A * cos(ωt)
  const xOffset = A * cos(omega * t);
  const currentX = x0 + xOffset;

  background(255);

  // Draw spring line
  stroke(0);
  strokeWeight(2);
  line(x0 - 150, y, currentX - massSize / 2, y);

  // Draw fixed wall
  stroke(100);
  strokeWeight(4);
  line(x0 - 150, y - 30, x0 - 150, y + 30);

  // Draw mass
  noStroke();
  fill('#3498db');
  rectMode(CENTER);
  rect(currentX, y, massSize, massSize);

  // Text labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Amplitude (A): ${A} px`, 20, 30);
  text(`Angular Frequency (ω): ${omega} rad/s`, 20, 50);
  text(`x(t) = A × cos(ωt)`, 20, 70);
  text(`x(t) = ${A.toFixed(2)} × cos(${omega.toFixed(2)} × t)`, 20, 90);

  drawObjectives("Simple Harmonic Motion (SHM)", [
    "Visualize horizontal SHM using a spring-mass system",
    "Adjust amplitude (A) and angular frequency (ω)",
    "SHM equation used: x(t) = A cos(ωt)",
    "Observe oscillation and spring contraction visually"
  ]);
}
