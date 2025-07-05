// topics/optics/diffraction.js

function diffraction() {
  const slitWidthMicron = parseFloat(select('#slitWidth').value()); // μm
  const wavelengthNm = parseFloat(select('#wavelength').value());   // nm

  const slitWidth = slitWidthMicron * 1e-6; // Convert to meters
  const wavelength = wavelengthNm * 1e-9;   // Convert to meters

  const D = 1.0; // Distance to screen in meters (arbitrary constant for scaling)
  const screenHeight = height - 100;

  background(255);

  // Draw slit
  stroke(0);
  strokeWeight(2);
  const slitY1 = height / 2 - 40;
  const slitY2 = height / 2 + 40;
  line(width / 4, slitY1, width / 4, slitY2);

  // Draw screen
  stroke(0);
  line((3 * width) / 4, 100, (3 * width) / 4, height - 100);

  // Intensity calculation (based on sinc² function)
  noStroke();
  for (let y = 0; y < screenHeight; y++) {
    const theta = Math.atan((y - screenHeight / 2) / 200); // small angle approx
    const beta = (Math.PI * slitWidth * Math.sin(theta)) / wavelength;
    const intensity = beta === 0 ? 1 : (Math.sin(beta) / beta) ** 2;

    const brightness = intensity * 255;
    fill(brightness);
    rect((3 * width) / 4 - 5, y + 100, 10, 1);
  }

  // Draw labels
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Slit Width: ${slitWidthMicron} μm`, 20, 30);
  text(`Wavelength: ${wavelengthNm} nm`, 20, 50);

  drawObjectives("Diffraction through a Single Slit", [
    "Observe light diffraction due to wave interference",
    "Adjust slit width and wavelength to see fringe width changes",
    "Pattern governed by sinc²(β), where β = πa sinθ / λ",
    "Central maximum is brightest and widest"
  ]);
}
