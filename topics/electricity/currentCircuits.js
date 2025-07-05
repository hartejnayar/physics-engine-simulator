let currentOffset = 0;

function currentCircuits() {
  const V = parseFloat(select('#voltage').value());
  const R = parseFloat(select('#resistance').value());

  const I = V / R;
  const Irounded = I.toFixed(2);

  background(255);

  // Draw battery
  fill('#e74c3c');
  rect(150, height / 2 - 40, 20, 80); // positive
  fill('#3498db');
  rect(130, height / 2 - 20, 20, 40); // negative
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text('+', 160, height / 2);
  text('–', 140, height / 2);

  // Wire path coordinates
  const wireY = height / 2;
  const leftX = 150 + 20;
  const rightX = 550;
  const resistorX1 = 300;
  const resistorX2 = 450;

  stroke(0);
  strokeWeight(2);
  // Wire path
  line(leftX, wireY, resistorX1, wireY); // before resistor
  line(resistorX2, wireY, rightX, wireY); // after resistor

  // Resistor
  stroke('#2c3e50');
  strokeWeight(4);
  line(resistorX1, wireY - 20, resistorX2, wireY - 20);
  line(resistorX1, wireY + 20, resistorX2, wireY + 20);
  line(resistorX1, wireY - 20, resistorX1, wireY + 20);
  line(resistorX2, wireY - 20, resistorX2, wireY + 20);
  noStroke();
  fill(0);
  text('R', (resistorX1 + resistorX2) / 2, wireY + 35);

  // Current animation: moving green dots
  const spacing = 30;
  const speed = constrain(I * 5, 0.5, 10);
  currentOffset += speed;
  if (currentOffset > spacing) currentOffset = 0;

  for (let x = leftX + currentOffset; x < resistorX1; x += spacing) {
    fill('#27ae60');
    noStroke();
    circle(x, wireY - 10, 6);
  }
  for (let x = resistorX2 + currentOffset; x < rightX; x += spacing) {
    fill('#27ae60');
    noStroke();
    circle(x, wireY - 10, 6);
  }

  // Labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Voltage (V): ${V} V`, 20, 30);
  text(`Resistance (R): ${R} Ω`, 20, 50);
  text(`Current (I): ${Irounded} A`, 20, 70);

  drawObjectives("Ohm’s Law with Live Current Animation", [
    "Green dots simulate current flow (conventional direction)",
    "Voltage and resistance control current value",
    "Observe how I = V / R behaves visually",
    "Battery shows + and – terminals clearly"
  ]);
}

window.currentCircuits = currentCircuits;
