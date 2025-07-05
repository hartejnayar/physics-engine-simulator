// topics/waves/superposition.js

let pulse1X = 0;
let pulse2X = 0;
let resetting = false;

function superposition() {
  const amp1 = parseFloat(select('#amp1').value());
  const amp2 = parseFloat(select('#amp2').value());
  const speed = 50; // constant speed
  const centerY = height / 2;
  const pulseWidth = 60;

  // Time-based motion
  const dt = deltaTime / 1000;
  if (!resetting) {
    pulse1X += speed * dt;
    pulse2X -= speed * dt;

    if (pulse1X > width + pulseWidth || pulse2X < -pulseWidth) {
      resetting = true;
      setTimeout(() => {
        pulse1X = -pulseWidth;
        pulse2X = width + pulseWidth;
        resetting = false;
      }, 1000);
    }
  }

  background(255);

  // Draw baseline
  stroke(0);
  line(0, centerY, width, centerY);

  // Combined wave = superposition of both
  strokeWeight(2);
  stroke('#9b59b6');
  noFill();
  beginShape();
  for (let x = 0; x <= width; x++) {
    const y1 = amp1 * gaussian(x - pulse1X);
    const y2 = amp2 * gaussian(x - pulse2X);
    const totalY = centerY - (y1 + y2);
    vertex(x, totalY);
  }
  endShape();

  // Pulse 1
  stroke('#3498db');
  strokeWeight(1);
  beginShape();
  for (let x = 0; x <= width; x++) {
    const y = centerY - amp1 * gaussian(x - pulse1X);
    vertex(x, y);
  }
  endShape();

  // Pulse 2
  stroke('#e67e22');
  strokeWeight(1);
  beginShape();
  for (let x = 0; x <= width; x++) {
    const y = centerY - amp2 * gaussian(x - pulse2X);
    vertex(x, y);
  }
  endShape();

  // Labels
  fill(0);
  noStroke();
  textSize(14);
  textAlign(LEFT);
  text(`Amplitude 1: ${amp1}`, 20, 30);
  text(`Amplitude 2: ${amp2}`, 20, 50);

  drawObjectives("Superposition of Waves", [
    "Visualize interference of two traveling wave pulses",
    "Adjust amplitudes to observe constructive or destructive interference",
    "Total wave = sum of both individual waves",
    "Auto resets after pulses exit the screen",
    "y = (A1+A2)sin(kx+omegat+phi)"
  ]);
}

// Gaussian-shaped pulse function
function gaussian(x) {
  return Math.exp(-0.002 * x * x);
}
