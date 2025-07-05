let projectileT = 0;
let trajectoryPoints = [];

function projectile() {
  const angle = select('#angle').value();
  const speed = select('#speed').value();

  const u = speed;
  const theta = angle;

  const totalTime = getTimeOfFlight(u, theta);
  const maxHeight = getMaxHeight(u, theta);
  const range = getRange(u, theta);

  projectileT += deltaTime / 1000;
  if (projectileT > totalTime) {
    projectileT = 0;
    trajectoryPoints = [];
  }

  const vx = u * Math.cos(radians(theta));
  const vy = u * Math.sin(radians(theta));
  const t = projectileT;

  const x = vx * t;
  const y = vy * t - 0.5 * g * t * t;

  const scale = 5;
  const drawX = 50 + x * scale;
  const drawY = height - 180 - y * scale;

  trajectoryPoints.push({ x: drawX, y: drawY });

  stroke(120);
  line(0, height - 180, width, height - 180);

  fill('#2ecc71');
  ellipse(drawX, drawY, 16, 16);

  noFill();
  stroke('#3498db');
  strokeWeight(2);
  beginShape();
  for (let pt of trajectoryPoints) {
    vertex(pt.x, pt.y);
  }
  endShape();

  noStroke();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Angle: ${theta}°`, 20, 20);
  text(`Speed: ${u} m/s`, 20, 40);
  text(`Time of Flight: ${totalTime.toFixed(2)} s`, 20, 60);
  text(`Max Height: ${maxHeight.toFixed(2)} m`, 20, 80);
  text(`Range: ${range.toFixed(2)} m`, 20, 100);

  drawObjectives("Projectile Motion", [
    "Visualize a projectile under gravity",
    "Adjust speed and launch angle",
    "See trajectory, time of flight, range & height"
  ]);
}
