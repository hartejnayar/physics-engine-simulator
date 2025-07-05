function photoelectricEffect() {
  const hf = parseFloat(select('#hf').value());    // photon energy (eV)
  const phi = parseFloat(select('#phi').value());  // work function (eV)

  const ke = hf - phi;

  background(255);
  textSize(18);
  fill(30);
  text("Photoelectric Effect Simulation", 20, 30);

  // Display parameters
  textSize(14);
  fill(50);
  text(`Photon Energy (hf): ${hf.toFixed(2)} eV`, 20, 60);
  text(`Work Function (ϕ): ${phi.toFixed(2)} eV`, 20, 80);
  text(`Kinetic Energy: ${ke > 0 ? ke.toFixed(2) : 0} eV`, 20, 100);

  // Visual representation
  push();
  translate(width / 2 - 150, height / 2);

  // Metal surface
  fill(100);
  rect(0, -50, 20, 100);

  // Incoming photon
  stroke('#f1c40f');
  strokeWeight(3);
  line(-80, 0, 0, 0);
  noStroke();
  fill('#f1c40f');
  triangle(-10, -5, 0, 0, -10, 5);
  text("Photon", -70, -10);

  // Electron ejected if KE > 0
  if (ke > 0) {
    fill('#3498db');
    ellipse(60, 0, 10, 10);
    stroke('#3498db');
    strokeWeight(2);
    line(20, 0, 60, 0);
    noStroke();
    fill(0);
    text("Electron", 70, -10);
  } else {
    fill(150);
    text("No Emission (KE ≤ 0)", 30, 30);
  }

  pop();

  drawObjectives("Photoelectric Effect", [
    "Visualize emission of electrons from a metal surface",
    "Adjust photon energy and work function",
    "Observe electron emission based on hf > φ"
  ]);
}

window.photoelectricEffect = photoelectricEffect;
