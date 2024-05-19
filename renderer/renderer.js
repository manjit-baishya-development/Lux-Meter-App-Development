document.addEventListener("DOMContentLoaded", function() {
    async function updateLuxValues() {
        try {
            const data = await window.electronAPI.fetchData();
            if (data) {
                document.getElementById('analog-value').innerText = data.analogValue;
                document.getElementById('lux-value').innerText = data.lux.toFixed(4);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Update values every second
    setInterval(updateLuxValues, 1000);
    updateLuxValues();
});
