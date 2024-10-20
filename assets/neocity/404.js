var percentageElement = document.getElementById("percentage");
var percentage = 0;

function process() {
  percentage += parseInt(Math.random() * 10);
  if (percentage > 100) {
    percentage = 100;
  }
  percentageElement.innerText = percentage + "%"; // Display percentage with '%'
  
  if (percentage < 100) {
    processInterval(); // Continue if below 100
  } else {
    setTimeout(function() {
      window.location.href = "https://providence-ho.neocities.org/"; // Redirect after reaching 100%
    }, 500); // Add a short delay for smooth transition
  }
}

function processInterval() {
  setTimeout(process, Math.random() * (1000 - 500) + 500); // Random interval
}

processInterval();
