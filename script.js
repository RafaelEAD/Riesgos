// Inicializa el mapa en un punto central
var map = L.map('map').setView([19.4326, -99.1332], 5); // CDMX como referencia

// Agrega un fondo base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Agrega un marcador interactivo (puedes agregar más con coordenadas de otros sitios)
var marker = L.marker([19.4326, -99.1332]).addTo(map);
marker.bindPopup("CDMX - Haz clic para seleccionar escenario").openPopup();

// Evento para mostrar el submenú cuando se haga clic en el marcador
marker.on('click', function () {
    document.getElementById("submenu").style.display = "block";
});

// Función para cargar el mapa seleccionado
function cargarMapa() {
    var escenario = document.getElementById("escenario").value;
    var temporalidad = document.getElementById("temporalidad").value;
    var archivo = `data/${escenario}_${temporalidad}.html`;

    document.getElementById("mapaFrame").src = archivo;
    document.getElementById("mapaFrame").style.display = "block";
}
