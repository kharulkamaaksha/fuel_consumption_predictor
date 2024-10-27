document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Send data to the Flask backend for prediction
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `<p>Predicted Fuel Efficiency: ${data.km_per_liter.toFixed(2)} km per 1 liter</p>`;
    })
    .catch(error => console.error('Error:', error));
});
