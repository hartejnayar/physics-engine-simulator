// topics/waves/dopplerEffect.js

let wavefronts = [];
let lastEmission = 0;
const speedOfSound = 343; // m/s in air (used for scale)

function dopplerEffect() {
  const vs = parseFloat(select('#vs').value());  // Source velocity
  const vo = parseFloat(select('#vo').value());  // Observer velocity
  const freq = parseFloat(select('#freq').value()); // Emitted frequency

  const sourceX = width / 4;
  const observerX = (3 * width) / 4;
  const centerY = height / 2;

  // Update wavefronts
  const now = millis();
  if (now - lastEmission > 1000 / freq) {
    wavefronts.push({
      x: sourceX,
      radius: 0,
      emittedAt: now
    });
    lastEmission = now;
  }

  background(255);

  // Move source and observer
  const dt = deltaTime / 1000;
  const sourceShift = vs * dt * 0.2;     // scaled for screen
  const observerShift = vo * dt * 0.2;

  // Draw wavefronts
  for (let w of wavefronts) {
    w.radius += (speedOfSound * dt) * 0.2;
    stroke(100, 100, 255, 100);
    noFill();
    circle(w.x, centerY, 2 * w.radius);
  }

  // Remove old wavefronts
  wavefronts = wavefronts.filter(w => w.radius < width * 1.5);

  // Draw source
  fill('#e74c3c');
  noStroke();
  ellipse(sourceX, centerY, 30);
  fill(0);
  textAlign(CENTER);
  textSize(12);
  text("Source", sourceX, centerY + 30);

  // Draw observer
  fill('#2ecc71');
  ellipse(observerX, centerY, 30);
  fill(0);
  text("Observer", observerX, centerY + 30);

  // Doppler effect calculation
  const observedFreq = ((speedOfSound + vo) / (speedOfSound - vs)) * freq;

  // Display info
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text(`Source Velocity (vs): ${vs} m/s`, 20, 30);
  text(`Observer Velocity (vo): ${vo} m/s`, 20, 50);
  text(`Emitted Frequency: ${freq} Hz`, 20, 70);
  text(`Observed Frequency: ${observedFreq.toFixed(2)} Hz`, 20, 90);

  drawObjectives("Doppler Effect (Linear)", [
    "Visualize the Doppler effect from a moving source and observer",
    "Adjust velocities of source and observer",
    "Observe changes in wavefront spacing",
    "Calculate and display the perceived frequency",
    "observed frequency = frequency*(speed of sound + observer speed / speed of sound - emmitted speed)"
  ]);
}
