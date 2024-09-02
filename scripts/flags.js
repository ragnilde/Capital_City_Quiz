document.addEventListener('DOMContentLoaded', function() {
    const flags = [
        {
            "name": "Abu Dhabi",
            "country": "United Arab Emirates",
            "filename": "abu_dhabi.png"
        },
        
        {
            "name": "Abuja",
            "country": "Nigeria",
            "filename": "abuja.png"
        },
        
        {
            "name": "Accra",
            "country": "Ghana",
            "filename": "accra.png"
        },
        
        {
            "name": "Addis Ababa",
            "country": "Ethiopia",
            "filename": "addis_ababa.png"
        },
        
        {
            "name": "Amman",
            "country": "Jordan",
            "filename": "amman.png"
        },
        
        {
            "name": "Amsterdam",
            "country": "Netherlands",
            "filename": "amsterdam.png"
        },
        
        {
            "name": "Andorra la Vella",
            "country": "Andorra",
            "filename": "andorra_la_vella.png"
        },
        
        {
            "name": "Antananarivo",
            "country": "Madagascar",
            "filename": "antananarivo.png"
        },
        
        {
            "name": "Asmara",
            "country": "Eritrea",
            "filename": "asmara.png"
        },
        
        {
            "name": "Astana",
            "country": "Kazakhstan",
            "filename": "astana.png"
        },
        
        {
            "name": "Asunción",
            "country": "Paraguay",
            "filename": "asunción.png"
        },
        
        {
            "name": "Baghdad",
            "country": "Iraq",
            "filename": "baghdad.png"
        },
        
        {
            "name": "Baku",
            "country": "Azerbaijan",
            "filename": "baku.png"
        },
        
        {
            "name": "Bangkok",
            "country": "Thailand",
            "filename": "bangkok.png"
        },
        
        {
            "name": "Banjul",
            "country": "Gambia",
            "filename": "banjul.png"
        },
        
        {
            "name": "Beirut",
            "country": "Lebanon",
            "filename": "beirut.png"
        },
        
        {
            "name": "Belfast",
            "country": "Northern Ireland",
            "filename": "belfast.png"
        },
        
        {
            "name": "Belgrade",
            "country": "Serbia",
            "filename": "belgrade.png"
        },
        
        {
            "name": "Belmopan",
            "country": "Belize",
            "filename": "belmopan.png"
        },
        
        {
            "name": "Berlin",
            "country": "Germany",
            "filename": "berlin.png"
        },
        
        {
            "name": "Bern",
            "country": "Switzerland",
            "filename": "bern.png"
        },
        
        {
            "name": "Bishkek",
            "country": "Kyrgyzstan",
            "filename": "bishkek.png"
        },
        
        {
            "name": "Bissau",
            "country": "Guinea-Bissau",
            "filename": "bissau.png"
        },
        
        {
            "name": "Bogotá",
            "country": "Colombia",
            "filename": "bogotá.png"
        },
        
        {
            "name": "Brasilia",
            "country": "Brazil",
            "filename": "brasilia.png"
        },
        
        {
            "name": "Bratislava",
            "country": "Slovakia",
            "filename": "bratislava.png"
        },
        
        {
            "name": "Brno",
            "country": "Czechia",
            "filename": "brno.png"
        },
        
        {
            "name": "Brussels",
            "country": "Belgium",
            "filename": "brussels.png"
        },
        
        {
            "name": "Bucharest",
            "country": "Romania",
            "filename": "bucharest.png"
        },
        
        {
            "name": "Budapest",
            "country": "Hungary",
            "filename": "budapest.png"
        },
        
        {
            "name": "Buenos Aires",
            "country": "Argentina",
            "filename": "buenos_aires.png"
        },
        
        {
            "name": "Cairo",
            "country": "Egypt",
            "filename": "cairo.png"
        },
        
        {
            "name": "Canberra",
            "country": "Australia",
            "filename": "canberra.png"
        },
        
        {
            "name": "Cape Town",
            "country": "South Africa",
            "filename": "cape_town.png"
        },
        
        {
            "name": "Caracas",
            "country": "Venezuela",
            "filename": "caracas.png"
        },
        
        {
            "name": "Cayenne",
            "country": "French Guiana",
            "filename": "cayenne.png"
        },
        
        {
            "name": "Cardiff",
            "country": "Wales",
            "filename": "cardiff.png"
        },
        
        {
            "name": "Castries",
            "country": "Saint Lucia",
            "filename": "castries.png"
        },
        
        {
            "name": "Chișinău",
            "country": "Moldova",
            "filename": "chisinau.png"
        },
        
        {
            "name": "Colombo",
            "country": "Sri Lanka",
            "filename": "colombo.png"
        },
        
        {
            "name": "Conakry",
            "country": "Guinea",
            "filename": "conakry.jpg"
        },
        
        {
            "name": "Copenhagen",
            "country": "Denmark",
            "filename": "copenhagen.png"
        },
        
        {
            "name": "Dakar",
            "country": "Senegal",
            "filename": "dakar.png"
        },
        
        {
            "name": "Damascus",
            "country": "Syria",
            "filename": "damascus.png"
        },
        
        {
            "name": "Dili",
            "country": "East Timor",
            "filename": "dili.png"
        },
        
        {
            "name": "Dublin",
            "country": "Ireland",
            "filename": "dublin.png"
        },
        
        {
            "name": "Edinburgh",
            "country": "Scotland",
            "filename": "edinburgh.png"
        },
        
        {
            "name": "Freetown",
            "country": "Sierra Leone",
            "filename": "freetown.png"
        },
        
        {
            "name": "Funafuti",
            "country": "Tuvalu",
            "filename": "funafuti.png"
        },
        
        {
            "name": "Gaborone",
            "country": "Botswana",
            "filename": "gaborone.png"
        },
        
        {
            "name": "Georgetown",
            "country": "Guyana",
            "filename": "georgetown.png"
        },
        
        {
            "name": "Gibraltar",
            "country": "Gibraltar",
            "filename": "gibraltar.png"
        },
        
        {
            "name": "Greater London",
            "country": "United Kingdom",
            "filename": "greater_london.png"
        },
        
        {
            "name": "Guatemala City",
            "country": "Guatemala",
            "filename": "guatemala_city.png"
        },
        
        {
            "name": "Hagåtña",
            "country": "Guam",
            "filename": "hagåtña.png"
        },
    
        {
            "name": "Hanoi",
            "country": "Vietnam",
            "filename": "hanoi.png"
        },
        
        {
            "name": "Harare",
            "country": "Zimbabwe",
            "filename": "harare.png"
        },
        
        {
            "name": "Hargeisa",
            "country": "Somaliland",
            "filename": "hargeisa.png"
        },
        
        {
            "name": "Havana",
            "country": "Cuba",
            "filename": "havana.png"
        },
        
        {
            "name": "Helsinki",
            "country": "Finland",
            "filename": "helsinki.png"
        },
        
        {
            "name": "Honiara",
            "country": "Solomon Islands",
            "filename": "honiara.png"
        },
        
        {
            "name": "Jakarta",
            "country": "Indonesia",
            "filename": "jakarta.png"
        },
        
        {
            "name": "Jerusalem",
            "country": "Israel",
            "filename": "jerusalem.png"
        },
        
        {
            "name": "Juba",
            "country": "South Sudan",
            "filename": "juba.png"
        },
        
        {
            "name": "Kabul",
            "country": "Afghanistan",
            "filename": "kabul.png"
        },
        
        {
            "name": "Kathmandu",
            "country": "Nepal",
            "filename": "kathmandu.png"
        },
        
        {
            "name": "Kinshasa",
            "country": "Democratic Republic of the Congo",
            "filename": "kinshasa.png"
        },
        
        {
            "name": "Kuala Lumpur",
            "country": "Malaysia",
            "filename": "kuala_lumpur.png"
        },
        
        {
            "name": "Kuwait City",
            "country": "Kuwait",
            "filename": "kuwait_city.png"
        },
        
        {
            "name": "Kyiv",
            "country": "Ukraine",
            "filename": "kyiv.png"
        },
        
        {
            "name": "La Paz",
            "country": "Bolivia",
            "filename": "la_paz.png"
        },
        
        {
            "name": "Libreville",
            "country": "Gabon",
            "filename": "libreville.png"
        },
        
        {
            "name": "Lima",
            "country": "Peru",
            "filename": "lima.png"
        },
        
        {
            "name": "Lisbon",
            "country": "Portugal",
            "filename": "lisbon.png"
        },
        
        {
            "name": "Ljubljana",
            "country": "Slovenia",
            "filename": "ljubljana.png"
        },
        
        {
            "name": "London",
            "country": "United Kingdom",
            "filename": "london.png"
        },
        
        {
            "name": "Luanda",
            "country": "Angola",
            "filename": "luanda.png"
        },
        
        {
            "name": "Luxembourg City",
            "country": "Luxembourg",
            "filename": "luxembourg_city.png"
        },
        
        {
            "name": "Madrid",
            "country": "Spain",
            "filename": "madrid.png"
        },
        
        {
            "name": "Majuro Atoll",
            "country": "Marshall Islands",
            "filename": "majuro.png"
        },
        
        {
            "name": "Malabo",
            "country": "Equatorial Guinea",
            "filename": "malabo.png"
        },
        
        {
            "name": "Managua",
            "country": "Nicaragua",
            "filename": "managua.png"
        },
        
        {
            "name": "Manama",
            "country": "Bahrain",
            "filename": "manama.png"
        },
        
        {
            "name": "Manila",
            "country": "Philippines",
            "filename": "manila.png"
        },
        
        {
            "name": "Maputo",
            "country": "Mozambique",
            "filename": "maputo.png"
        },
        
        {
            "name": "Mexico City",
            "country": "Mexico",
            "filename": "mexico_city.png"
        },
        
        {
            "name": "Minsk",
            "country": "Belarus",
            "filename": "minsk.png"
        },
        
        {
            "name": "Monaco City",
            "country": "Monaco",
            "filename": "monaco_city.png"
        },
        
        {
            "name": "Monrovia",
            "country": "Liberia",
            "filename": "monrovia.png"
        },
        
        {
            "name": "Montevideo",
            "country": "Uruguay",
            "filename": "montevideo.jpg"
        },
        
        {
            "name": "Moscow",
            "country": "Russia",
            "filename": "moscow.png"
        },
        
        {
            "name": "Muscat",
            "country": "Oman",
            "filename": "muscat.png"
        },
        
        {
            "name": "Nairobi",
            "country": "Kenya",
            "filename": "nairobi.png"
        },
        
        {
            "name": "Naypyidaw",
            "country": "Myanmar",
            "filename": "naypyidaw.png"
        },
        
        {
            "name": "New Delhi",
            "country": "India",
            "filename": "new_delhi.png"
        },
        
        {
            "name": "Ngerulmud",
            "country": "Palau",
            "filename": "ngerulmud.png"
        },
        
        {
            "name": "Nicosia",
            "country": "Cyprus",
            "filename": "nicosia.png"
        },
        
        {
            "name": "Nuuk",
            "country": "Greenland",
            "filename": "nuuk.png"
        },
        
        {
            "name": "Oslo",
            "country": "Norway",
            "filename": "oslo.png"
        },
        
        {
            "name": "Ottawa",
            "country": "Canada",
            "filename": "ottawa.png"
        },
        
        {
            "name": "Palikir",
            "country": "Federated States of Micronesia",
            "filename": "palikir.png"
        },
        
        {
            "name": "Panama City",
            "country": "Panama",
            "filename": "panama_city.png"
        },
        
        {
            "name": "Paris",
            "country": "France",
            "filename": "paris.png"
        },
        
        {
            "name": "Podgorica",
            "country": "Montenegro",
            "filename": "podgorica.png"
        },
        
        {
            "name": "Port Louis",
            "country": "Mauritius",
            "filename": "port_louis.png"
        },
        
        {
            "name": "Port Moresby",
            "country": "Papua New Guinea",
            "filename": "port_moresby.png"
        },
        
        {
            "name": "Port of Spain",
            "country": "Trinidad and Tobago",
            "filename": "port_of_spain.png"
        },
        
        {
            "name": "Port Vila",
            "country": "Vanuatu",
            "filename": "port_vila.png"
        },
        
        {
            "name": "Porto-Novo",
            "country": "Benin",
            "filename": "porto-novo.png"
        },
        
        {
            "name": "Prague",
            "country": "Czechia",
            "filename": "prague.png"
        },
        
        {
            "name": "Praia",
            "country": "Cape Verde",
            "filename": "praia.png"
        },
        
        {
            "name": "Pretoria",
            "country": "South Africa",
            "filename": "pretoria.png"
        },
        
        {
            "name": "Pristina",
            "country": "Kosovo",
            "filename": "pristina.png"
        },
        
        {
            "name": "Putrajaya",
            "country": "Malaysia",
            "filename": "putrajaya.png"
        },
        
        {
            "name": "Quito",
            "country": "Ecuador",
            "filename": "quito.png"
        },
        
        {
            "name": "Rabat",
            "country": "Morocco",
            "filename": "rabat.png"
        },
        
        {
            "name": "Ramallah",
            "country": "Palestine",
            "filename": "ramallah.png"
        },
        
        {
            "name": "Reykjavik",
            "country": "Iceland",
            "filename": "reykjavik.png"
        },
        
        {
            "name": "Riga",
            "country": "Latvia",
            "filename": "riga.png"
        },
        
        {
            "name": "Rome",
            "country": "Italy",
            "filename": "rome.png"
        },
        
        {
            "name": "Saint-Pierre",
            "country": "Saint Pierre and Miquelon",
            "filename": "st_pierre.png"
        },
        
        {
            "name": "San José",
            "country": "Costa Rica",
            "filename": "san_josé.png"
        },
        
        {
            "name": "San Juan",
            "country": "Puerto Rico",
            "filename": "san_juan.png"
        },
        
        {
            "name": "San Marino",
            "country": "San Marino",
            "filename": "san_marino.png"
        },
        
        {
            "name": "San Salvador",
            "country": "El Salvador",
            "filename": "san_salvador.png"
        },
        
        {
            "name": "Santiago",
            "country": "Chile",
            "filename": "santiago.png"
        },
        
        {
            "name": "São Tomé",
            "country": "São Tomé and Príncipe",
            "filename": "sao_tome.png"
        },
        
        {
            "name": "Sarajevo",
            "country": "Bosnia and Herzegovina",
            "filename": "sarajevo.png"
        },
        
        {
            "name": "Sejong",
            "country": "South Korea",
            "filename": "sejong.png"
        },
        
        {
            "name": "Seoul",
            "country": "South Korea",
            "filename": "seoul.png"
        },
        
        {
            "name": "Singapore",
            "country": "Singapore",
            "filename": "singapore.png"
        },
        
        {
            "name": "Skopje",
            "country": "Montenegro",
            "filename": "skopje.png"
        },
        
        {
            "name": "Sofia",
            "country": "Bulgaria",
            "filename": "sofia.png"
        },
        
        {
            "name": "St. Helier",
            "country": "Jersey",
            "filename": "st_helier.png"
        },
        
        {
            "name": "St. Peter Port",
            "country": "Czechia",
            "filename": "brno.png"
        },
        
        {
            "name": "Stockholm",
            "country": "Sweden",
            "filename": "stockholm.png"
        },
        
        {
            "name": "Sucre",
            "country": "Bolivia",
            "filename": "sucre.png"
        },
        
        {
            "name": "Taipei",
            "country": "Taiwan",
            "filename": "taipei.png"
        },
        
        {
            "name": "Tallinn",
            "country": "Estonia",
            "filename": "tallinn.png"
        },
        
        {
            "name": "Tashkent",
            "country": "Uzbekistan",
            "filename": "tashkent.png"
        },
        
        {
            "name": "Tbilisi",
            "country": "Georgia",
            "filename": "tbilisi.png"
        },
        
        {
            "name": "Tegucigalpa",
            "country": "Honduras",
            "filename": "tegucigalpa.png"
        },
        
        {
            "name": "Tehran",
            "country": "Iran",
            "filename": "tehran.png"
        },
        
        {
            "name": "The Hague",
            "country": "Netherlands",
            "filename": "the_hague.png"
        },
        
        {
            "name": "Tirana",
            "country": "Albania",
            "filename": "tirana.png"
        },
        
        {
            "name": "Tiraspol",
            "country": "Transnistria",
            "filename": "tiraspol.png"
        },
        
        {
            "name": "Tōkyō",
            "country": "Japan",
            "filename": "tokyo.png"
        },
        
        {
            "name": "Tórshavn",
            "country": "Faroe Islands",
            "filename": "tórshavn.png"
        },
        
        {
            "name": "Tripoli",
            "country": "Libya",
            "filename": "tripoli.png"
        },
        
        {
            "name": "Ulaanbaatar",
            "country": "Mongolia",
            "filename": "ulaanbaatar.png"
        },
        
        {
            "name": "Vaduz",
            "country": "Liechtenstein",
            "filename": "vaduz.png"
        },
        
        {
            "name": "Valletta",
            "country": "Malta",
            "filename": "valletta.png"
        },
        
        {
            "name": "Valparaiso",
            "country": "Chile",
            "filename": "valparaiso.png"
        },
        
        {
            "name": "Vatican City",
            "country": "Vatican City",
            "filename": "vatican_city.png"
        },
        
        {
            "name": "Vienna",
            "country": "Austria",
            "filename": "vienna.png"
        },
        
        {
            "name": "Vilnius",
            "country": "Lithuania",
            "filename": "vilnius.png"
        },
        
        {
            "name": "Warsaw",
            "country": "Poland",
            "filename": "warsaw.png"
        },
        
        {
            "name": "Washington, D.C",
            "country": "United States of America",
            "filename": "washington_dc.png"
        },
        
        {
            "name": "Wellington",
            "country": "New Zealand",
            "filename": "wellington.png"
        },
        
        {
            "name": "Windhoek",
            "country": "Namibia",
            "filename": "windhoek.png"
        },
        
        {
            "name": "Yerevan",
            "country": "Armenia",
            "filename": "yerevan.png"
        },
        
        {
            "name": "Zagreb",
            "country": "Zagreb",
            "filename": "zagreb.png"
        }
    ];

    const tbody = document.querySelector('#flags-table tbody');

    flags.forEach(flag => {
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
});