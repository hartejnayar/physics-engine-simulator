let angleRB = 0;
let angularVelocity = 0;
let lastUpdateTimeRB = 0;

function rigidBody() {
  const torque = parseFloat(select('#torque').value());
  const inertia = parseFloat(select('#inertia').value());

  const alpha = torque / inertia;

  const now = millis() / 1000;
  const dt = now - lastUpdateTimeRB;
  lastUpdateTimeRB = now;

  angularVelocity += alpha * dt;
  angleRB += angularVelocity * dt;

  const angleRad = angleRB;

  translate(width / 2, height / 2);
  stroke(0);
  fill(200);
  ellipse(0, 0, 10, 10);

  stroke('#e67e22');
  strokeWeight(8);
  const rodLength = 150;
  const x = rodLength * cos(angleRad);
  const y = rodLength * sin(angleRad);
  line(0, 0, x, y);

  fill('#2980b9');
  noStroke();
  ellipse(x, y, 20, 20);

  resetMatrix();
  fill(0);
  textSize(14);
  textAlign(LEFT);
  text(`Torque: ${torque.toFixed(2)} Nm`, 20, 20);
  text(`Moment of Inertia: ${inertia.toFixed(2)} kg·m²`, 20, 40);
  text(`Angular Acceleration (α): ${alpha.toFixed(2)} rad/s²`, 20, 60);
  text(`Angular Velocity (ω): ${angularVelocity.toFixed(2)} rad/s`, 20, 80);
  text(`Angular Displacement (θ): ${angleRB.toFixed(2)} rad`, 20, 100);

  drawObjectives("Rigid Body Rotation", [
    "Simulate torque-driven rotational motion",
    "Adjust torque and moment of inertia",
    "Observe angular acceleration, velocity and displacement"
  ]);
}
