let uiElements = []; // Store dynamically created sliders and labels

function setupUI(simulationName) {
  clearUI(); // Remove previous simulation's UI

  switch (simulationName) {
    // Mechanics
    case "projectile":
      addSlider("Angle (°)", "angle", 0, 90, 45);
      addSlider("Speed (m/s)", "speed", 10, 100, 50);
      break;

    case "rigidBody":
      addSlider("Torque (Nm)", "torque", 0, 100, 30);
      addSlider("Moment of Inertia (kg·m²)", "inertia", 1, 50, 10);
      break;

    case "friction":
      addSlider("Normal Force (N)", "normal", 0, 100, 50);
      addSlider("Friction Coefficient (μ)", "mu", 0.1, 1.0, 0.5, 0.01);
      break;

    case "circularMotion":
      addSlider("Velocity (m/s)", "velocity", 1, 50, 20);
      addSlider("Radius (m)", "radius", 1, 100, 30);
      break;

    case "workEnergyPower":
      addSlider("Force (N)", "force", 1, 100, 50);
      addSlider("Displacement (m)", "displacement", 1, 100, 20);
      break;

    case "collision":
      addSlider("Mass 1 (kg)", "mass1", 1, 50, 10);
      addSlider("Velocity 1 (m/s)", "velocity1", -50, 50, 10);
      addSlider("Mass 2 (kg)", "mass2", 1, 50, 10);
      addSlider("Velocity 2 (m/s)", "velocity2", -50, 50, -10);
      break;

    // Waves
    case "shm":
      addSlider("Amplitude (A)", "amplitude", 10, 100, 50);
      addSlider("Angular Frequency (ω)", "omega", 1, 20, 5);
      break;

    case "wavePulse":
      addSlider("Pulse Speed", "pulseSpeed", 1, 50, 10);
      break;

    case "superposition":
      addSlider("Amplitude 1", "amp1", 0, 50, 20);
      addSlider("Amplitude 2", "amp2", 0, 50, 30);
      break;

    case "dopplerEffect":
      addSlider("Source Velocity (m/s)", "vs", -100, 100, 20);
      addSlider("Observer Velocity (m/s)", "vo", -100, 100, 0);
      addSlider("Frequency (Hz)", "freq", 100, 1000, 500);
      break;

    // Optics
    case "reflection":
    case "refraction":
      addSlider("Incident Angle (°)", "incident", 0, 90, 45);
      addSlider("Refractive Index 1", "n1", 1, 3, 1.0, 0.1);
      addSlider("Refractive Index 2", "n2", 1, 3, 1.5, 0.1);
      break;

    case "lenses":
      addSlider("Object Distance (cm)", "objectDist", 10, 100, 50);
      addSlider("Focal Length (cm)", "focalLength", -50, 50, 20);
      break;

    case "diffraction":
      addSlider("Slit Width (μm)", "slitWidth", 1, 100, 10);
      addSlider("Wavelength (nm)", "wavelength", 300, 700, 500);
      break;

    // Electricity
    case "currentCircuits":
      addSlider("Voltage (V)", "voltage", 1, 100, 10);
      addSlider("Resistance (Ω)", "resistance", 1, 100, 10);
      break;

    case "resistorsSeriesParallel":
      addSlider("Resistor 1 (Ω)", "r1", 1, 100, 10);
      addSlider("Resistor 2 (Ω)", "r2", 1, 100, 20);
      break;

    case "kirchhoffLaws":
      addSlider("EMF (V)", "emf", 1, 100, 10);
      addSlider("Resistance 1 (Ω)", "r1", 1, 100, 10);
      addSlider("Resistance 2 (Ω)", "r2", 1, 100, 20);
      break;

    case "capacitorCharging":
      addSlider("Max Voltage (V)", "vmax", 1, 100, 5);
      addSlider("Time (s)", "time", 0, 10, 1, 0.1);
      addSlider("RC Constant", "rc", 0.1, 10, 1, 0.1);
      break;

    // Electrostatics
    case "electricField":
      addSlider("Charge (μC)", "charge", -100, 100, 10);
      addSlider("Distance (cm)", "distance", 1, 100, 10);
      break;

    case "potential":
      addSlider("Charge (μC)", "charge", -100, 100, 10);
      addSlider("Distance (cm)", "distance", 1, 100, 10);
      break;

    case "coulombsLaw":
      addSlider("Charge 1 (μC)", "q1", -100, 100, 10);
      addSlider("Charge 2 (μC)", "q2", -100, 100, -10);
      addSlider("Distance (cm)", "distance", 1, 100, 10);
      break;

    // Modern Physics
    case "photoelectricEffect":
      addSlider("Photon Energy (eV)", "hf", 1, 10, 5);
      addSlider("Work Function (eV)", "phi", 1, 5, 2);
      break;


    case "bohrModel":
      addSlider("Energy Level (n)", "n", 1, 5, 1);
      break;

    case "nuclearDecay":
      addSlider("Initial Nuclei", "n0", 100, 10000, 1000);
      addSlider("Half-Life (s)", "hl", 1, 100, 10);
      addSlider("Elapsed Time (s)", "t", 0, 100, 20);
      break;

    // Thermodynamics
    case "carnotCycle":
      addSlider("T₁ (K)", "T1", 100, 1000, 600);
      addSlider("T₂ (K)", "T2", 100, 1000, 300);
      break;

    case "calorimetry":
      addSlider("Mass 1 (g)", "m1", 10, 500, 100);
      addSlider("Specific Heat 1", "c1", 0.1, 5.0, 0.9, 0.1);
      addSlider("Initial Temp 1 (°C)", "t1", 20, 100, 80);
      addSlider("Mass 2 (g)", "m2", 10, 500, 200);
      addSlider("Specific Heat 2", "c2", 0.1, 5.0, 4.18, 0.1);
      addSlider("Initial Temp 2 (°C)", "t2", 0, 40, 25);
      break;

    case "idealGasLaw":
      addSlider("Pressure (kPa)", "pressure", 10, 500, 101);
      addSlider("Temperature (K)", "temperature", 100, 1000, 300);
      addSlider("Moles (mol)", "moles", 0.1, 5, 1, 0.1);
      break;
    case "thermalExpansion":
      addSlider("Initial Length (cm)", "L0", 10, 100, 50);
      addSlider("Coefficient α (1/°C)", "alpha", 0.00001, 0.0005, 0.00012, 0.00001);
      addSlider("Temperature Change (ΔT °C)", "deltaT", -100, 300, 50);
      break;
    case "thermoProcesses":
      addSlider("Initial Pressure (kPa)", "P0", 50, 500, 101);
      addSlider("Initial Volume (L)", "V0", 1, 10, 2);
      addSlider("Initial Temperature (K)", "T0", 100, 1000, 300);

      const processMenu = createSelect();
      processMenu.id("processType");
      processMenu.position(720, 40 + uiElements.length * 40);
      processMenu.option("isothermal");
      processMenu.option("adiabatic");
      processMenu.option("isobaric");
      processMenu.option("isochoric");
      uiElements.push(processMenu);
      break;


  }
}

function addSlider(labelText, sliderId, min, max, initial, step = 1) {
  createSliderLabel(labelText, 620, 40 + uiElements.length * 40);
  const slider = createSlider(min, max, initial, step);
  slider.position(720, 40 + uiElements.length * 40);
  slider.style('width', '150px');
  slider.id(sliderId);
  uiElements.push(slider);
}

function createSliderLabel(txt, x, y) {
  const label = createDiv(txt);
  label.position(x, y);
  label.style('color', '#333');
  label.style('font-weight', 'bold');
  label.style('font-size', '14px');
  uiElements.push(label);
}

function clearUI() {
  uiElements.forEach(el => el.remove());
  uiElements = [];
}

function drawObjectives(title, lines) {
  const x = 20;
  const y = height - 130;

  fill('#2c3e50');
  textSize(14);
  textAlign(LEFT);
  textStyle(BOLD);
  text(` Objectives: ${title}`, x, y);

  textStyle(NORMAL);
  fill('#34495e');
  for (let i = 0; i < lines.length; i++) {
    text(`- ${lines[i]}`, x + 10, y + 20 + i * 18);
  }
}
