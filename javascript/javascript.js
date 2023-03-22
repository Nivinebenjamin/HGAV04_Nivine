
//leaflet kaart//
const leafletmap = L.map('leaflet-map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletmap);




//end leaflet kaart//

//openlayers kaart//
const openlayersMap= new ol.Map({
    target:'openlayers-map',
    layers:[
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([5.2213, 51.7160]),
        zoom:8
    })
});

//Maplibre map//

var map = new maplibregl.Map({
    container: 'maplibre', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});


//Esrikaart map//

require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

	esriConfig.apiKey = "AAPK4f674d77278f461086d34ac836aed8adI-yxUqFsbbZEEFjDBOENZ1JQHeTa_shSS0Qbib50Y183s7zvzUtM3-W9SdnVQokX";

	const esriKaart = new Map({
		basemap: "arcgis-topographic" // Basemap layer service
	});

	const view = new MapView({
		map: esriKaart,
		center: [5.2213, 51.7160], // Longitude, latitude
		zoom: 8, // Zoom level
		container: "esriKaart" // Div element
	})
});


//Mapbox kaart//



//Google API//




