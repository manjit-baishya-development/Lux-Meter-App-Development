async function fetchData() {
    try {
      const response = await fetch('http://192.168.1.22/data');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      document.getElementById('analogValue').innerText = data.analogValue;
      document.getElementById('lux').innerText = data.lux.toFixed(4);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  setInterval(fetchData, 1000);
  fetchData();