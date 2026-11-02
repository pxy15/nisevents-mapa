# O projektu

Projekat se sastoji od interaktivne mape sa događajima, koja prikazuje ukratko informacije o događaju.
Svaki događaj ima kružić sa informacijama i različitu boju po kategoriji na mapi.
Cilj projekta je da se ova mapa integriše na sajt [NišEvent](https://nisevents.com/).

# Sadržaj 

Priložena su 4 dokumenta:
- index.html - za pregleg kako mapa izgleda
- style.css - takođe samo za vizuelni prikaz mape
- script.js - u njemu se nalazi kod potreban za integraciju projekta
- dogadjaji.json - nalaze se imaginarni događaji, da bi se demonstirala mapa
- logo1.png - Logo sajta [NišEvent](https://nisevents.com/).

# Integracija

1. Unutar postojećeg html fajla učitati Leaflet biblioteku CSS i JavaScript 
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

2. Dodati elemente iz *index.html* i *style.css* označene sa VAZNO

3. Ubaciti sadržaj iz *script.js* u postojeći projekat

4. U postojeću bazu podataka za lokacije dodati **geografsku širinu** i geografsku dužinu

5. Optimizovati čitanje JSON fajlova (ukoliko su imena promenljivih drugačije od onih u *script.js*)

6. Testiranje mape i prilagođavanje CSS stilova mape sa postojećim stilovima
