document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve input values
    const engineSize = parseFloat(document.getElementById('engine_size').value);
    const cylinders = parseInt(document.getElementById('cylinders').value);
    const fuelType = document.getElementById('fuel_type').value.toLowerCase();
    const emissions = parseFloat(document.getElementById('emissions').value);

    // Validate fuel type
    if (fuelType !== 'diesel' && fuelType !== 'gasoline') {
        alert("Invalid fuel type! Please enter either 'diesel' or 'gasoline'.");
        return;
    }

    // Mock prediction logic (you can replace this with actual calculations)
    const predictedConsumption = mockPrediction(engineSize, cylinders, fuelType, emissions);
    const kmPerLiter = predictedConsumption > 0 ? (100 / predictedConsumption).toFixed(2) : 0;

    // Show result
    document.getElementById('predicted_efficiency').innerText = `Predicted Fuel Efficiency: ${kmPerLiter} km per 1 liter`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('fuelForm').style.display = 'none'; // Hide form
});

// Mock prediction function
function mockPrediction(engineSize, cylinders, fuelType, emissions) {
    // This is a placeholder for your actual prediction logic
    // For simplicity, let's assume some mock calculations based on inputs
    let baseConsumption = (engineSize * 10) - (cylinders * 0.5) + (emissions * 0.2);
    if (fuelType === 'diesel') {
        baseConsumption -= 1; // Diesel may have slightly better efficiency
    }
    return Math.max(baseConsumption, 0); // Ensure non-negative consumption
}

// Back to Prediction link
document.getElementById('backToPrediction').addEventListener('click', function() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('fuelForm').style.display = 'block'; // Show form again
});
