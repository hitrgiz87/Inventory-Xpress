  // Sample data for the doughnut chart
  var data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
        data: [30, 40, 30], // Values for each segment
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // Colors for each segment
    }]
};

// Configuration options
var options = {
    cutoutPercentage: 50, // Set the cutout percentage to create a doughnut chart
    responsive: true,
    maintainAspectRatio: false
};

// Get the canvas element
var ctx = document.getElementById('doughnutChart').getContext('2d');

// Create the doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});