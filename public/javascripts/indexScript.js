
var data = {
    labels: [], 
    datasets: [{
        data: [], 
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
    }]
};

// Configuration options
var options = {
    cutoutPercentage: 50,
    responsive: true,
    maintainAspectRatio: false
};

// Get the canvas element
var ctx = document.getElementById('doughnutChart').getContext('2d');

// Fetch actual data from the server
fetch('/doughnut-chart-data') 
    .then(response => response.json())
    .then(assetData => {
    // Update the chart with the new data
        data.labels = assetData.labels;
        data.datasets[0].data = assetData.data;

        // Create the doughnut chart
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


fetch('/user-count')
.then(response => response.json())
.then(data => {
    const userCountElement = document.getElementById('userCount');
    userCountElement.innerText = `Current User count ${data.userCount}`;
})
.catch(error => {
    console.error('Error fetching user count:', error);
});

fetch('/asset-count')
.then(response => response.json())
.then(data => {
    const userCountElement = document.getElementById('assetCount');
    userCountElement.innerText = `Current asset amount: ${data.assetCount}`;
})
.catch(error => {
    console.error('Error fetching user count:', error);
});

