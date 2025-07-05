let currentSimulation = null;
let currentSimulationName = null;

function setup() {
  const canvas = createCanvas(800, 600);
  canvas.parent(document.querySelector('main'));
  frameRate(60);
  background(255);

  // Setup dropdown listener
  const dropdown = select('#topicSelect');
  dropdown.changed(() => {
    const simName = dropdown.value();
    currentSimulationName = simName;

    if (typeof window[simName] === 'function') {
      clear(); // clear canvas
      background(255); // reset background
      setupUI(simName); // set up sliders
      currentSimulation = window[simName]; // assign function to be drawn
    } else {
      clear();
      background(255);
      clearUI();
      currentSimulation = null;
      drawSimulationNotAvailable();
    }
  });
}

function draw() {
  background(250);

  if (currentSimulation) {
    currentSimulation();
  } else {
    drawIntro();
  }
}

function drawIntro() {
  fill(80);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Welcome to the Physics Engine Simulator", width / 2, height / 2 - 20);
  textSize(16);
  text("Choose a topic from the dropdown to begin a simulation", width / 2, height / 2 + 20);
}

function drawSimulationNotAvailable() {
  fill(80);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Simulation not available", width / 2, height / 2);
}
