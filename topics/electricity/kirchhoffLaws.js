let kirchhoffOffset = 0;

function kirchhoffLaws() {
  const emf = parseFloat(select('#emf').value());
  const R1 = parseFloat(select('#r1').value());
  const R2 = parseFloat(select('#r2').value());

  const I = emf / (R1 + R2);
  const Irounded = I.toFixed(2);

  background(255);
  stroke(0);
  strokeWeight(2);

  // Define circuit rectangle
  const topY = 200;
  const bottomY = 400;
  const leftX = 200;
  const rightX = 600;
  const midX = (leftX + rightX) / 2;

  // Wires
  line(leftX, topY, rightX, topY);       // top
  line(rightX, topY, rightX, bottomY);   // right
  line(rightX, bottomY, leftX, bottomY); // bottom
  line(leftX, bottomY, leftX, topY);     // left

  // Battery (left vertical wire)
  fill('#e74c3c');
  rect(leftX - 15, topY + 60, 10, 80); // positive
  fill('#3498db');
  rect(leftX - 15, bottomY - 60, 10, -80); // negative
  fill(0);
  noStroke();
  text('+', leftX - 30, topY + 100);
  text('–', leftX - 30, bottomY - 100);

  // Resistor R1 (top)
  stroke('#2c3e50');
  strokeWeight(4);
  line(midX - 40, topY, midX + 40, topY);
  noStroke();
  fill(0);
  text('R1', midX, topY - 10);

  // Resistor R2 (bottom)
  stroke('#2c3e50');
  strokeWeight(4);
  line(midX - 40, bottomY, midX + 40, bottomY);
  noStroke();
  fill(0);
  text('R2', midX, bottomY + 15);

  // Animated green dots (current flow clockwise)
  const spacing = 30;
  const speed = constrain(I * 5, 0.5, 10);
  kirchhoffOffset += speed;
  if (kirchhoffOffset > spacing) kirchhoffOffset = 0;

  stroke('#27ae60');
  strokeWeight(0);
  for (let x = leftX + kirchhoffOffset; x < rightX; x += spacing) {
    fill('#27ae60');
    circle(x, topY - 10, 6); // top wire
  }
  for (let y = topY + kirchhoffOffset; y < bottomY; y += spacing) {
    fill('#27ae60');
    circle(rightX + 10, y, 6); // right wire
  }
  for (let x = rightX - kirchhoffOffset; x > leftX; x -= spacing) {
    fill('#27ae60');
    circle(x, bottomY + 10, 6); // bottom wire
  }
  for (let y = bottomY - kirchhoffOffset; y > topY; y -= spacing) {
    fill('#27ae60');
    circle(leftX - 10, y, 6); // left wire
  }

  // Display Values
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`EMF (ε): ${emf} V`, 20, 30);
  text(`Resistance R₁: ${R1} Ω`, 20, 50);
  text(`Resistance R₂: ${R2} Ω`, 20, 70);
  text(`Total Current (I): ${Irounded} A`, 20, 90);

  drawObjectives("Kirchhoff’s Laws: Simple Circuit", [
    "Demonstrates KVL: ε = IR₁ + IR₂",
    "Applies KCL at all junctions (1 loop here)",
    "Green dots animate conventional current flow",
    "Adjust EMF, R₁, and R₂ to change current"
  ]);
}

window.kirchhoffLaws = kirchhoffLaws;
