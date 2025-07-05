
function capacitorCharging() {
  const Vmax = parseFloat(select('#vmax').value());
  const t = parseFloat(select('#time').value());
  const RC = parseFloat(select('#rc').value());

  const Vt = Vmax * (1 - Math.exp(-t / RC));
  const Vrounded = Vt.toFixed(2);

  background(255);
  textAlign(LEFT);
  textSize(14);
  fill(0);

  // Circuit layout
  const cx = 200;
  const cy = height / 2;

  // Battery
  fill('#f39c12');
  rect(cx, cy - 40, 20, 80);
  fill(255);
  text('+', cx + 25, cy - 20);
  text('–', cx + 25, cy + 20);

  // Wire to resistor
  stroke(0);
  strokeWeight(2);
  line(cx + 20, cy, cx + 100, cy);

  // Resistor
  stroke('#2c3e50');
  strokeWeight(3);
  line(cx + 100, cy - 20, cx + 150, cy - 20);
  line(cx + 100, cy + 20, cx + 150, cy + 20);
  line(cx + 100, cy - 20, cx + 100, cy + 20);
  line(cx + 150, cy - 20, cx + 150, cy + 20);
  noStroke();
  fill(0);
  text('R', cx + 120, cy + 35);

  // Wire to capacitor
  stroke(0);
  strokeWeight(2);
  line(cx + 150, cy, cx + 220, cy);

  // Capacitor plates
  stroke('#2980b9');
  strokeWeight(4);
  line(cx + 220, cy - 20, cx + 220, cy + 20); // Left plate
  line(cx + 240, cy - 20, cx + 240, cy + 20); // Right plate
  noStroke();
  fill(0);
  text('C', cx + 225, cy + 35);

  // Wire loop back
  stroke(0);
  strokeWeight(2);
  line(cx + 240, cy, cx + 300, cy);
  line(cx + 300, cy, cx + 300, cy + 100);
  line(cx + 300, cy + 100, cx, cy + 100);
  line(cx, cy + 100, cx, cy);

  // Voltage growth bar (visual exponential)
  fill('#27ae60');
  const barHeight = map(Vt, 0, Vmax, 0, 80);
  rect(cx + 260, cy + 100 - barHeight, 20, barHeight);

  // Live Data
  fill(0);
  noStroke();
  text(`Max Voltage (V₀): ${Vmax} V`, 20, 30);
  text(`Time (t): ${t} s`, 20, 50);
  text(`RC Constant: ${RC}`, 20, 70);
  text(`Voltage Across Capacitor V(t): ${Vrounded} V`, 20, 100);

  drawObjectives("Capacitor Charging in RC Circuit", [
    "Demonstrates exponential growth of voltage",
    "V(t) = V₀(1 - e^(-t/RC))",
    "Adjust time and RC to see real-time changes",
    "Green bar visualizes capacitor charging"
  ]);
}

window.capacitorCharging = capacitorCharging;
