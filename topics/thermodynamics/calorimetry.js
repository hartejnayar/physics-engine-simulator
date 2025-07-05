function calorimetry() {
  const m1 = parseFloat(select('#m1').value()); // mass of hot object (g)
  const c1 = parseFloat(select('#c1').value()); // specific heat of hot object (J/g·°C)
  const t1 = parseFloat(select('#t1').value()); // initial temperature of hot object (°C)

  const m2 = parseFloat(select('#m2').value()); // mass of cold object (g)
  const c2 = parseFloat(select('#c2').value()); // specific heat of cold object (J/g·°C)
  const t2 = parseFloat(select('#t2').value()); // initial temperature of cold object (°C)

  const Tfinal = ((m1 * c1 * t1) + (m2 * c2 * t2)) / (m1 * c1 + m2 * c2);
  const Q = m1 * c1 * (Tfinal - t1); // heat lost/gained by body 1

  background(255);
  fill(30);
  textSize(15);
  textStyle(BOLD);
  text("Calorimetry Simulation", 20, 30);

  textStyle(NORMAL);
  textSize(13);
  let y = 60;
  const dy = 20;

  text(`Hot Body: Mass = ${m1} g, c = ${c1} J/g°C, T₁ = ${t1}°C`, 20, y); y += dy;
  text(`Cold Body: Mass = ${m2} g, c = ${c2} J/g°C, T₂ = ${t2}°C`, 20, y); y += dy + 5;
  text(`Final Temperature: ${Tfinal.toFixed(2)} °C`, 20, y); y += dy;
  text(`Heat Transferred: ${Q.toFixed(2)} J`, 20, y);

  // Draw thermometer bars
  push();
  translate(width / 2, height / 2 + 30); // center align visuals
  drawThermo("Hot Body", t1, Tfinal, color('#e74c3c'), -100);
  drawThermo("Cold Body", t2, Tfinal, color('#3498db'), 100);
  pop();

  drawObjectives("Calorimetry", [
    "Simulates heat exchange between two substances",
    "Calculates final temperature at thermal equilibrium",
    "Uses Q = mcΔT and conservation of energy",
    "Visual bar representation for temperature shift"
  ]);
}

function drawThermo(label, Tstart, Tend, col, xOffset) {
  const maxTemp = 100;
  const barMaxHeight = 150;
  const barLength = map(Tend, 0, maxTemp, 0, barMaxHeight);

  // Draw container
  fill(240);
  stroke(0);
  rect(xOffset - 20, -barMaxHeight, 40, barMaxHeight);

  // Fill bar with new temp
  fill(col);
  rect(xOffset - 20, -barLength, 40, barLength);

  // Labels
  noStroke();
  fill(20);
  textAlign(CENTER);
  textSize(12);
  text(label, xOffset, 30);
  text(`${Tend.toFixed(1)} °C`, xOffset, 50);
}

window.calorimetry = calorimetry;
