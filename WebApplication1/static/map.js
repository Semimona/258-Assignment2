var map = L.map('map').setView([116.397128, 39.916527], 16);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '&copy; OpenStreetMap'
 }).addTo(map);