// topics/optics/reflection.js

function reflection() {
  const angleDeg = parseFloat(select('#incident').value());
  const angleRad = radians(angleDeg);

  const mirrorX = width / 2;
  const mirrorTop = 120;
  const mirrorBottom = height - 120;
  const rayLength = 180;

  background(255);

  // Draw mirror (vertical)
  stroke(120);
  strokeWeight(4);
  line(mirrorX, mirrorTop, mirrorX, mirrorBottom);

  // Incident ray start point
  const incidentStartX = mirrorX - rayLength * cos(angleRad);
  const incidentStartY = height / 2 - rayLength * sin(angleRad);

  // Reflected ray end point
  const reflectEndX = mirrorX + rayLength * cos(angleRad);
  const reflectEndY = height / 2 - rayLength * sin(angleRad);

  // Draw Incident Ray
  stroke('#e74c3c');
  strokeWeight(2.5);
  line(incidentStartX, incidentStartY, mirrorX, height / 2);

  // Draw Normal (dashed)
  stroke('#34495e');
  strokeWeight(1.5);
  drawingContext.setLineDash([6, 5]);
  line(mirrorX, height / 2 - 100, mirrorX, height / 2 + 100);
  drawingContext.setLineDash([]);

  // Draw Reflected Ray
  stroke('#2ecc71');
  strokeWeight(2.5);
  line(mirrorX, height / 2, reflectEndX, reflectEndY);

  // Labels for rays
  noStroke();
  fill('#e74c3c');
  textSize(13);
  textAlign(LEFT);
  text("Incident Ray", incidentStartX + 10, incidentStartY - 10);

  fill('#2ecc71');
  text("Reflected Ray", reflectEndX - 100, reflectEndY - 10);

  fill('#34495e');
  text("Normal", mirrorX + 10, height / 2 - 110);

  // Mirror label
  fill(50);
  textSize(12);
  textAlign(CENTER);
  text("Mirror", mirrorX, mirrorTop - 10);

  // Angle labels
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Incident Angle: ${angleDeg.toFixed(1)}°`, 30, 30);
  text(`Reflected Angle: ${angleDeg.toFixed(1)}°`, 30, 50);

  drawObjectives("Reflection of Light (Plane Mirror)", [
    "Observe reflection of a light ray on a vertical plane mirror",
    "Adjust the angle of incidence using the slider",
    "Visualize incident ray, normal, and reflected ray",
    "Confirm: Angle of Incidence = Angle of Reflection"
  ]);
}
