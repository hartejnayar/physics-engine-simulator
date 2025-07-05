function lenses() {
  const objectDist = parseFloat(select('#objectDist').value());
  const focalLength = parseFloat(select('#focalLength').value());

  const scale = 3; // 1 cm = 3 pixels
  const ox = width / 2 - objectDist * scale;
  const oy = height / 2 - 50;
  const lensX = width / 2;
  const focalX = scale * Math.abs(focalLength);

  background(255);

  stroke(0);
  strokeWeight(1);
  line(0, height / 2, width, height / 2);

  stroke('#2980b9');
  strokeWeight(3);
  line(lensX, height / 2 - 80, lensX, height / 2 + 80);
  noStroke();
  fill('#2980b9');
  textAlign(CENTER);
  textSize(14);
  text(focalLength > 0 ? "Convex Lens" : "Concave Lens", lensX, height / 2 - 90);

  fill(0);
  textSize(12);
  text("F", lensX + focalX, height / 2 + 15);
  text("F'", lensX - focalX, height / 2 + 15);
  stroke(150);
  strokeWeight(1);
  line(lensX + focalX, height / 2 - 5, lensX + focalX, height / 2 + 5);
  line(lensX - focalX, height / 2 - 5, lensX - focalX, height / 2 + 5);

  stroke('#27ae60');
  strokeWeight(3);
  line(ox, height / 2, ox, oy);
  fill('#27ae60');
  triangle(ox, oy, ox - 5, oy + 10, ox + 5, oy + 10);

  stroke('#e74c3c');
  strokeWeight(2);
  const ray1EndX = lensX;
  const ray1EndY = oy;
  line(ox, oy, ray1EndX, ray1EndY);

  if (focalLength > 0) {
    const focalY = getYfromLine(ray1EndX, ray1EndY, lensX + focalX, height / 2, lensX + 150);
    line(ray1EndX, ray1EndY, lensX + 150, focalY);
  } else {
    const virtualFocalY = getYfromLine(lensX - focalX, height / 2, ray1EndX, ray1EndY, lensX + 150);
    line(ray1EndX, ray1EndY, lensX + 150, virtualFocalY);
    drawingContext.setLineDash([6, 4]);
    line(ray1EndX, ray1EndY, lensX - focalX, height / 2);
    drawingContext.setLineDash([]);
  }

  stroke('#8e44ad');
  const centerRayX = lensX + 150;
  const centerRayY = getYfromLine(ox, oy, lensX, height / 2, centerRayX);
  line(ox, oy, centerRayX, centerRayY);

  const imageX = centerRayX;
  const imageY = centerRayY;

  stroke('#f39c12');
  strokeWeight(3);
  const imageDir = (imageY < height / 2) ? -1 : 1;
  line(imageX, height / 2, imageX, imageY);
  fill('#f39c12');
  triangle(imageX, imageY, imageX - 5, imageY + 10 * imageDir, imageX + 5, imageY + 10 * imageDir);

  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Object Distance: ${objectDist} cm`, 20, 30);
  text(`Focal Length: ${focalLength} cm (${focalLength > 0 ? 'Convex' : 'Concave'})`, 20, 50);

  drawObjectives("Image Formation by Lenses", [
    "Visualize how lenses form images based on object and focal length",
    "Convex: real or virtual image depending on distance",
    "Concave: always forms virtual, diminished image",
    "Follow colored rays to locate image formation"
  ]);
}

function getYfromLine(x1, y1, x2, y2, targetX) {
  const m = (y2 - y1) / (x2 - x1);
  return m * (targetX - x1) + y1;
}
