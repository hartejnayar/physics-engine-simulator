let pulseX = 0;
let pulseReset = false;

function wavePulse() {
  const speed = parseFloat(select('#pulseSpeed').value()); // pixels per second

  const pulseWidth = 80;
  const amplitude = 60;
  const centerY = height / 2;

  if (!pulseReset) {
    const dt = deltaTime / 1000;
    pulseX += speed * dt;

    if (pulseX > width + pulseWidth) {
      pulseReset = true;
      setTimeout(() => {
        pulseX = -pulseWidth;
        pulseReset = false;
      }, 800);
    }
  }

  background(255);

  // Draw the string
  stroke(0);
  line(0, centerY, width, centerY);

  // Draw the wave pulse
  noFill();
  stroke('#27ae60');
  strokeWeight(3);
  beginShape();
  for (let x = -pulseWidth; x <= pulseWidth; x++) {
    const localX = pulseX + x;
    const y = centerY - amplitude * exp(-0.01 * x * x); // Gaussian-shaped pulse
    vertex(localX, y);
  }
  endShape();

  // Display values
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Pulse Speed: ${speed} px/s`, 20, 30);
  text(`Pulse travels from left to right and resets automatically`, 20, 50);

  drawObjectives("Wave Pulse", [
    "Simulate a single pulse propagating through a medium",
    "Adjust the pulse speed using the slider",
    "Observe shape and travel of the Gaussian wave",
    "Pulse resets after leaving screen"
  ]);
}
