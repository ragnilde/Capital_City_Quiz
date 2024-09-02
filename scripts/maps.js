document.addEventListener('DOMContentLoaded', function() {
    const maps = [
        {
            "name": "Amsterdam",
            "country": "Netherlands",
            "filename": "amsterdam.webp"
        },
        
        {
            "name": "Andorra la Vella",
            "country": "Andorra",
            "filename": "andorra_la_vella.webp"
        },
        
        {
            "name": "Berlin",
            "country": "Germany",
            "filename": "berlin.webp"
        },
        
        {
            "name": "Bern",
            "country": "Switzerland",
            "filename": "bern.webp"
        },
        
        {
            "name": "Bratislava",
            "country": "Slovakia",
            "filename": "bratislava.webp"
        },
        
        {
            "name": "Brussels",
            "country": "Belgium",
            "filename": "brussels.webp"
        },
        
        {
            "name": "Copenhagen",
            "country": "Denmark",
            "filename": "copenhagen.webp"
        },
        
        {
            "name": "Dublin",
            "country": "Ireland",
            "filename": "dublin.webp"
        },
        
        {
            "name": "Gibraltar",
            "country": "Gibraltar",
            "filename": "gibraltar.webp"
        },
    
        {
            "name": "Helsinki",
            "country": "Finland",
            "filename": "helsinki.webp"
        },
        
        {
            "name": "Lisbon",
            "country": "Portugal",
            "filename": "lisbon.webp"
        },
        
        {
            "name": "London",
            "country": "United Kingdom / England",
            "filename": "london.webp"
        },
        
        {
            "name": "Longyearbyen",
            "country": "Svalbard",
            "filename": "longyearbyen.webp"
        },
        
        {
            "name": "Madrid",
            "country": "Spain",
            "filename": "madrid.webp"
        },
        
        {
            "name": "Mariehamn",
            "country": "Åland",
            "filename": "mariehamn.webp"
        },
        
        {
            "name": "Nuuk",
            "country": "Greenland",
            "filename": "nuuk.webp"
        },
        
        {
            "name": "Oslo",
            "country": "Norway",
            "filename": "oslo.webp"
        },
        
        {
            "name": "Ottawa",
            "country": "Canada",
            "filename": "ottawa.webp"
        },
        
        {
            "name": "Paris",
            "country": "France",
            "filename": "paris.webp"
        },
        
        {
            "name": "Prague",
            "country": "Czechia",
            "filename": "prague.webp"
        },
    
        {
            "name": "Reykjavik",
            "country": "Iceland",
            "filename": "reykjavik.webp"
        },
        
        {
            "name": "Riga",
            "country": "Latvia",
            "filename": "riga.webp"
        },
        
        {
            "name": "Rome",
            "country": "Italy",
            "filename": "rome.webp"
        },
        
        {
            "name": "Stockholm",
            "country": "Sweden",
            "filename": "stockholm.webp"
        },
        
        {
            "name": "Tallinn",
            "country": "Estonia",
            "filename": "tallinn.webp"
        },
        
        {
            "name": "Tórshavn",
            "country": "Faroe Islands",
            "filename": "torshavn.webp"
        },
        
        {
            "name": "Vaduz",
            "country": "Liechtenstein",
            "filename": "vaduz.webp"
        },
        
        {
            "name": "Vienna",
            "country": "Austria",
            "filename": "vienna.webp"
        },
        
        {
            "name": "Vilnius",
            "country": "Lithuania",
            "filename": "vilnius.webp"
        },
        
        {
            "name": "Washington, D.C",
            "country": "United States of America",
            "filename": "washington_dc.webp"
        }
    ];

    const tbody = document.querySelector('#maps-table tbody');

    maps.forEach(map => {
        const row = document.createElement('tr');
        
        const capitalCell = document.createElement('td');
        capitalCell.textContent = map.name;

        const countryCell = document.createElement('td');
        countryCell.textContent = map.country;

        const mapCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = `../images/maps/${map.filename}`;
        img.alt = `Map of ${map.name}`;
        img.style.width = '100px';
        img.style.height = 'auto';
        mapCell.appendChild(img);

        row.appendChild(capitalCell);
        row.appendChild(countryCell);
        row.appendChild(mapCell);

        tbody.appendChild(row);
    });
});