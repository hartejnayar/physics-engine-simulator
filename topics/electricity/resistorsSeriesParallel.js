function resistorsSeriesParallel() {
  const R1 = parseFloat(select('#r1').value());
  const R2 = parseFloat(select('#r2').value());

  const Req_series = R1 + R2;
  const Req_parallel = 1 / ((1 / R1) + (1 / R2));

  background(255);
  textAlign(LEFT);
  textSize(14);
  fill(0);

  // --- Series Circuit ---
  text("Series Connection", 100, 50);
  drawResistor(100, 80, "R₁");
  drawResistor(200, 80, "R₂");
  stroke(0);
  strokeWeight(2);
  line(80, 100, 100, 100);   // Left wire
  line(250, 100, 270, 100);  // Right wire

  // --- Parallel Circuit ---
  text("Parallel Connection", 100, 180);
  line(80, 200, 270, 200);  // Top wire
  line(80, 260, 270, 260);  // Bottom wire
  drawResistor(120, 200, "R₁", true); // vertical
  drawResistor(200, 200, "R₂", true);

  // Labels
  fill(0);
  noStroke();
  text(`R₁: ${R1} Ω`, 20, 320);
  text(`R₂: ${R2} Ω`, 20, 340);
  text(`Req (Series): ${Req_series.toFixed(2)} Ω`, 20, 370);
  text(`Req (Parallel): ${Req_parallel.toFixed(2)} Ω`, 20, 390);

  drawObjectives("Resistors in Series and Parallel", [
    "Visualize and compare resistor combinations",
    "Series: R_eq = R₁ + R₂",
    "Parallel: 1/R_eq = 1/R₁ + 1/R₂",
    "No animation — structural comparison only"
  ]);
}

function drawResistor(x, y, label, vertical = false) {
  stroke('#2c3e50');
  strokeWeight(3);
  if (!vertical) {
    // Horizontal resistor
    line(x, y - 10, x + 50, y - 10);
    line(x, y + 10, x + 50, y + 10);
    line(x, y - 10, x, y + 10);
    line(x + 50, y - 10, x + 50, y + 10);
    noStroke();
    fill(0);
    text(label, x + 20, y + 25);
  } else {
    // Vertical resistor
    line(x - 10, y + 10, x - 10, y + 60);
    line(x + 10, y + 10, x + 10, y + 60);
    line(x - 10, y + 10, x + 10, y + 10);
    line(x - 10, y + 60, x + 10, y + 60);
    noStroke();
    fill(0);
    text(label, x - 5, y + 75);
  }
}

window.resistorsSeriesParallel = resistorsSeriesParallel;
