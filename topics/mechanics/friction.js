let blockX = 100;
let blockV = 0;
let frictionLastReset = 0;

function friction() {
  const normal = parseFloat(select('#normal').value());
  const mu = parseFloat(select('#mu').value());

  const frictionForce = mu * normal;
  const appliedForce = 80;
  const mass = 5;
  const netForce = appliedForce - frictionForce;

  const dt = deltaTime / 1000;

  const maxX = width - 150; // Right limit for block
  const minX = 100;         // Start point

  if (netForce > 0) {
    const acceleration = netForce / mass;
    blockV += acceleration * dt;
    blockX += blockV * dt * 100; // scaled for visibility
  } else {
    blockV = 0;
  }

  // Reset block if it moves too far
  if (blockX > maxX) {
    blockX = minX;
    blockV = 0;
    frictionLastReset = millis();
  }

  // Draw ground
  fill(230);
  stroke(0);
  const groundY = height - 250;
  rect(0, groundY, width, 80);

  // Draw block
  const blockY = groundY - 50;
  fill('#f39c12');
  stroke(80);
  rect(blockX, blockY, 50, 50);

  // Display text
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Normal Force: ${normal} N`, 20, 20);
  text(`Friction Coefficient (μ): ${mu}`, 20, 40);
  text(`Frictional Force: ${frictionForce.toFixed(2)} N`, 20, 60);
  text(`Applied Force: ${appliedForce} N`, 20, 80);
  text(`Net Force: ${netForce > 0 ? netForce.toFixed(2) : 0} N`, 20, 100);

  drawObjectives("Friction Simulation", [
    "Visualize how friction resists motion",
    "Adjust normal force and μ (coefficient)",
    "See if a block overcomes friction and slides",
    "Auto-restarts if it reaches the edge"
  ]);
}
