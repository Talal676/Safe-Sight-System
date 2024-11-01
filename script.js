
// Placeholder incident alerts
const incidentList = document.getElementById('incident-list');
const incidents = ["PPE non-compliance detected", "Temperature hazard", "Structural weakness identified"];
incidents.forEach(incident => {
  const li = document.createElement('li');
  li.textContent = incident;
  incidentList.appendChild(li);
});

// Basic drone control functions
function takeOff() {
  alert("Drone is taking off.");
}

function land() {
  alert("Drone is landing.");
}

function emergencyStop() {
  alert("Emergency stop activated.");
}

// Real-time data visualization using Chart.js
const ppeComplianceCtx = document.getElementById('ppeComplianceChart').getContext('2d');
const environmentalDataCtx = document.getElementById('environmentalDataChart').getContext('2d');

const ppeComplianceChart = new Chart(ppeComplianceCtx, {
  type: 'pie',
  data: {
    labels: ['Compliant', 'Non-compliant'],
    datasets: [{
      label: 'PPE Compliance',
      data: [85, 15],  // Example data
      backgroundColor: ['#4caf50', '#f44336']
    }]
  },
  options: {
    responsive: true
  }
});

const environmentalDataChart = new Chart(environmentalDataCtx, {
  type: 'line',
  data: {
    labels: ['12:00', '12:05', '12:10', '12:15'],  // Example timestamps
    datasets: [{
      label: 'Temperature (°C)',
      data: [22, 23, 24, 25],  // Example data
      borderColor: '#f44336',
      fill: false
    }, {
      label: 'Air Quality Index',
      data: [40, 42, 45, 48],  // Example data
      borderColor: '#4caf50',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  }
});
