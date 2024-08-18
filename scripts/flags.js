document.addEventListener('DOMContentLoaded', function() {
    fetch('../json/flags.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#flags-table tbody');

            data.forEach(flag => {
                const row = document.createElement('tr');
                
                const capitalCell = document.createElement('td');
                capitalCell.textContent = flag.name;

                const countryCell = document.createElement('td');
                countryCell.textContent = flag.country;

                const flagCell = document.createElement('td');
                const img = document.createElement('img');
                img.src = `../images/flags/${flag.filename}`;
                img.alt = `Flag of ${flag.name}`;
                img.style.width = '100px';
                img.style.height = 'auto';
                flagCell.appendChild(img);

                row.appendChild(capitalCell);
                row.appendChild(countryCell);
                row.appendChild(flagCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading flags:', error));
});