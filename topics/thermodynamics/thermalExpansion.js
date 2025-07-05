function thermalExpansion() {
  const L0 = parseFloat(select('#L0').value());      // Initial length (cm)
  const alpha = parseFloat(select('#alpha').value()); // Coefficient (1/°C)
  const deltaT = parseFloat(select('#deltaT').value()); // Change in temperature (°C)

  const dL = alpha * L0 * deltaT;
  const Lf = L0 + dL;

  background(255);
  fill(30);
  textSize(16);
  textStyle(BOLD);
  text("Thermal Expansion Simulation", 20, 30);

  textStyle(NORMAL);
  textSize(13);
  let y = 60, dy = 22;
  text(`Initial Length (L₀): ${L0.toFixed(2)} cm`, 20, y); y += dy;
  text(`Coefficient (α): ${alpha} /°C`, 20, y); y += dy;
  text(`Temperature Change (ΔT): ${deltaT.toFixed(2)} °C`, 20, y); y += dy;
  text(`Final Length (L): ${Lf.toFixed(2)} cm`, 20, y);

  push();
  translate(width / 2 - 100, height / 2 + 50);
  drawExpansionBar(L0, dL);
  pop();

  drawObjectives("Thermal Expansion", [
    "Simulates linear expansion of a rod",
    "Length increases with temperature and expansion coefficient",
    "Uses formula: ΔL = α × L₀ × ΔT",
    "Rod elongates visually based on calculated final length"
  ]);
}

function drawExpansionBar(L0, dL) {
  const pxPerCm = 2.5;
  const initialLengthPx = L0 * pxPerCm;
  const finalLengthPx = (L0 + dL) * pxPerCm;

  const barHeight = 20;

  // Initial Length Bar (Grey)
  fill('#bdc3c7');
  rect(0, 0, initialLengthPx, barHeight);
  fill(0);
  textSize(12);
  textAlign(CENTER);
  text("Initial", initialLengthPx / 2, -10);

  // Expanded Bar (Orange)
  fill('#e67e22');
  rect(0, 40, finalLengthPx, barHeight);
  fill(0);
  text("Final", finalLengthPx / 2, 75);
}

window.thermalExpansion = thermalExpansion;
