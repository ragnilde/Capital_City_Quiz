document.addEventListener('DOMContentLoaded', function() {
    fetch('../json/maps.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#maps-table tbody');

            data.forEach(map => {
                const row = document.createElement('tr');
                
                const capitalCell = document.createElement('td');
                capitalCell.textContent = map.name;

                const countryCell = document.createElement('td');
                countryCell.textContent = map.country;

                const mapCell = document.createElement('td');
                const img = document.createElement('img');
                img.src = `/images/maps/${map.filename}`;
                img.alt = `Map of ${map.name}`;
                img.style.width = '100px';
                img.style.height = 'auto';
                mapCell.appendChild(img);

                row.appendChild(capitalCell);
                row.appendChild(countryCell);
                row.appendChild(mapCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading maps:', error));
});