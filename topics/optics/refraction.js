// topics/optics/refraction.js

function refraction() {
  const angleDeg = parseFloat(select('#incident').value());
  const angleRad = radians(angleDeg);
  const n1 = parseFloat(select('#n1').value());
  const n2 = parseFloat(select('#n2').value());

  const interfaceY = height / 2;
  const rayLength = 180;

  background(255);

  // Draw medium separation line
  stroke(100);
  strokeWeight(2);
  line(0, interfaceY, width, interfaceY);

  // Medium labels
  noStroke();
  fill(80);
  textSize(14);
  textAlign(CENTER);
  text(`Medium 1 (n₁ = ${n1})`, width / 2, interfaceY - 140);
  text(`Medium 2 (n₂ = ${n2})`, width / 2, interfaceY + 160);

  // Origin of incident ray
  const originX = width / 2 - rayLength * cos(angleRad);
  const originY = interfaceY - rayLength * sin(angleRad);

  // Point of incidence (center)
  const hitX = width / 2;
  const hitY = interfaceY;

  // Calculate angle of refraction using Snell’s Law
  let refracted = true;
  let refractedAngleRad;
  const sinTheta2 = (n1 / n2) * sin(angleRad);

  if (Math.abs(sinTheta2) <= 1) {
    refractedAngleRad = asin(sinTheta2);
  } else {
    refracted = false; // Total internal reflection
  }

  // Refracted ray end point
  const refractEndX = refracted ? hitX + rayLength * cos(refractedAngleRad) : hitX + rayLength * cos(angleRad);
  const refractEndY = refracted ? interfaceY + rayLength * sin(refractedAngleRad) : interfaceY - rayLength * sin(angleRad);

  // Draw Incident Ray
  stroke('#e67e22');
  strokeWeight(2.5);
  line(originX, originY, hitX, hitY);

  // Draw Normal (dashed)
  stroke('#34495e');
  strokeWeight(1.5);
  drawingContext.setLineDash([6, 5]);
  line(hitX, interfaceY - 100, hitX, interfaceY + 100);
  drawingContext.setLineDash([]);

  // Draw Refracted or Reflected Ray
  stroke(refracted ? '#3498db' : '#e74c3c');
  strokeWeight(2.5);
  line(hitX, hitY, refractEndX, refractEndY);

  // Text and Labels
  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Incident Angle: ${angleDeg.toFixed(1)}°`, 20, 30);

  if (refracted) {
    text(`Refracted Angle: ${degrees(refractedAngleRad).toFixed(1)}°`, 20, 50);
  } else {
    text(`Total Internal Reflection Occurs`, 20, 50);
  }

  drawObjectives("Refraction at Flat Interface", [
    "Visualize bending of light across two transparent media",
    "Adjust angle of incidence and refractive indices",
    "Observe refraction using Snell’s Law",
    "See total internal reflection when n₁ > n₂ and angle is large"
  ]);
}
