let mapa = L.map('map').setView([43.3209, 21.8958],14);

L.tileLayer(
    'https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=cb1_4ysw_1_45f4f123ca1beb59a664aa54',
    {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }
).addTo(mapa);

const lista = document.getElementById('lista-dogadjaja');

fetch('dogadjaji.json')
    .then(response => response.json())
    .then(dogadjaji => {
        dogadjaji.forEach(dogadjaj => {

            let boja = 'grey'
            switch(dogadjaj.kategorija){
                case 'Zabava' :
                    boja = 'blue'
                    break;
                case 'Pozorište':
                    boja = 'lime'
                    break;
                case 'Žurka':
                    boja = 'red'
                    break;
                case 'Muzika':
                    boja = 'purple'
                    break;
                default:
                    boja = 'grey';

            };

            const marker = L.circleMarker([dogadjaj.sirina, dogadjaj.duzina],
                {
                    radius: 20,
                    color: boja,
                    fillColor: boja,
                    fillOpacity: 0.5
                }
            )
            .addTo(mapa)
            .bindPopup(`
                <h3>${dogadjaj.naziv}</h3>
                <p>Lokacija: ${dogadjaj.lokacija}</p>
                <p>Kategorija: ${dogadjaj.kategorija}</p>
                <p>Cena: ${dogadjaj.cena} dinara</p>
            `);

            const kartica = document.createElement('div');
            kartica.className = 'dogadjaj';

            if (dogadjaj.cena === 0){
                kartica.innerHTML = `
                <h3>${dogadjaj.naziv}</h3>
                <p>Lokacija: ${dogadjaj.lokacija}</p>
                <p>Kategorija: ${dogadjaj.kategorija}</p>
                <p>Cena: Besplatno</p>
            `;
            }
            else{
                kartica.innerHTML = `
                <h3>${dogadjaj.naziv}</h3>
                <p>Lokacija: ${dogadjaj.lokacija}</p>
                <p>Kategorija: ${dogadjaj.kategorija}</p>
                <p>Cena: ${dogadjaj.cena} dinara</p>
            `;
            };
            
            lista.appendChild(kartica);

            kartica.addEventListener('click', function() {
                mapa.setView([dogadjaj.sirina, dogadjaj.duzina], 16);
                marker.openPopup();
            });
            
        });
    })