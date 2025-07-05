function circularMotion() {
  background(255);

  const vSlider = select('#velocity');
  const rSlider = select('#radius');

  if (!vSlider || !rSlider) {
    fill('red');
    textSize(16);
    text("Sliders not loaded!", 100, 100);
    return;
  }

  const v = parseFloat(vSlider.value());
  const r = parseFloat(rSlider.value());
  const omega = v / r;

  // Draw motion
  const centerX = width / 2;
  const centerY = height / 2 + 50; // elevated to avoid overlap

  stroke(100);
  noFill();
  ellipse(centerX, centerY, r * 2, r * 2);

  // rotating dot
  const t = millis() / 1000;
  const angle = omega * t;
  const x = centerX + r * Math.cos(angle);
  const y = centerY + r * Math.sin(angle);

  fill('#3498db');
  stroke('#2980b9');
  ellipse(x, y, 20, 20);

  // Objectives
  drawObjectives("Circular Motion", [
    "Visualize uniform circular motion",
    "Adjust speed and radius",
    "Understand relation between velocity, radius, and angular speed"
  ]);
}
