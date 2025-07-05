// reusable physics formulas

const g = 9.8; // gravitational acceleration (m/s²)

// ===== Projectile Motion Equations =====
function getTimeOfFlight(u, theta) {
  return (2 * u * Math.sin(radians(theta))) / g;
}

function getRange(u, theta) {
  return (Math.pow(u, 2) * Math.sin(radians(2 * theta))) / g;
}

function getMaxHeight(u, theta) {
  return (Math.pow(u * Math.sin(radians(theta)), 2)) / (2 * g);
}

// ===== SHM Equations =====
function getSHMDisplacement(A, omega, t) {
  return A * Math.cos(omega * t);
}

function getSHMVelocity(A, omega, t) {
  return -A * omega * Math.sin(omega * t);
}

// ===== Circular Motion =====
function getCentripetalForce(m, v, r) {
  return (m * v * v) / r;
}

// ===== Coulomb's Law =====
function getCoulombsForce(k, q1, q2, r) {
  return (k * q1 * q2) / (r * r);
}

// ===== Refraction (Snell's Law) =====
function getRefractedAngle(n1, n2, theta1) {
  const sinTheta2 = (n1 / n2) * Math.sin(radians(theta1));
  if (sinTheta2 > 1) return NaN; // Total internal reflection
  return degrees(Math.asin(sinTheta2));
}

// ===== Ohm's Law and Power =====
function getCurrent(V, R) {
  return V / R;
}

function getPower(V, I) {
  return V * I;
}

function getEquivalentResistanceSeries(resistors) {
  return resistors.reduce((a, b) => a + b, 0);
}

function getEquivalentResistanceParallel(resistors) {
  return 1 / resistors.reduce((acc, r) => acc + (1 / r), 0);
}

// ===== Capacitor Charging =====
function getCapacitorCharge(Qmax, t, RC) {
  return Qmax * (1 - Math.exp(-t / RC));
}

function getCapacitorVoltage(Vmax, t, RC) {
  return Vmax * (1 - Math.exp(-t / RC));
}

// ===== Bohr Model =====
function getElectronEnergyLevel(n, Z = 1) {
  const R = 13.6; // Rydberg constant in eV
  return -R * Z * Z / (n * n);
}

// ===== Photoelectric Effect =====
function getKineticEnergyOfPhotoelectron(hf, workFunction) {
  return hf - workFunction;
}

// ===== Utility =====
function radians(deg) {
  return deg * Math.PI / 180;
}

function degrees(rad) {
  return rad * 180 / Math.PI;
}
