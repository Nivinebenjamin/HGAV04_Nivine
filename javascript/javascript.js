
//leaflet kaart//
const leafletmap = L.map('leaflet-map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletmap);

var geojsonFeature={

 "type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "properties": {
      "name": "New York"
    },
    "geometry": {
      "coordinates": [
        103.851959,
        1.290270
        
      ],
      "type": "Point"
    },
    "id": 0
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Los Angeles "
    },
    "geometry": {
      "coordinates": [
        -118.2652448310516,
        34.158474505207224
      ],
      "type": "Point"
    },
    "id": 1
  },
  {
    "type": "Feature",
    "properties": {
      "name ": "Tel Aviv"
    },
    "geometry": {
      "coordinates": [
        34.781594691098576,
        32.09008355706702
      ],
      "type": "Point"
    },
    "id": 2
  },
  {
    "type": "Feature",
    "properties": {
      "name ": "Singapore "
    },
    "geometry": {
      "coordinates": [
        103.82208525152237,
        1.3539093324894225
      ],
      "type": "Point"
    },
    "id": 3
  },
  {
    "type": "Feature",
    "properties": {
      "name": "Hong Kong "
    },
    "geometry": {
      "coordinates": [
        114.18158056008139,
        22.274909951245647
      ],
      "type": "Point"
    },
    "id": 4
  }
]}
L.geoJSON(geojsonFeature).addTo(leafletmap);

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

var maplibre = new maplibregl.Map({
    container: 'maplibre', // container id
    style: 'https://api.maptiler.com/maps/8718435e-b827-439a-a691-48207121d42b/style.json?key=jF1UM2WUAu2XxUlqe9H9', // style URL
    center: [103.81779586660787, 1.310148280089848], // starting position [lng, lat]
    zoom: 14 // starting zoom
});

maplibre.on('load', function() {
maplibre.addSource('weg', {
type: 'geojson',
data: './data/nassim_road.geojson'
});
  
  
maplibre.addLayer({
 'id': 'nassim road',
'type': 'line',
'source': 'weg',
'layout': {
  'line-join': 'round',
  'line-cap': 'round'
  },
  'paint': {
  'line-color': '#a594f9',
  'line-width': 8
  }

});
});



//Esrikaart map//

require(["esri/config", "esri/WebMap", "esri/views/MapView"], function (esriConfig, WebMap, MapView) {

	esriConfig.apiKey = "AAPK4f674d77278f461086d34ac836aed8adI-yxUqFsbbZEEFjDBOENZ1JQHeTa_shSS0Qbib50Y183s7zvzUtM3-W9SdnVQokX";

	const esri = new WebMap({
		//basemap: "topo-vector" // Basemap layer service
    portalItem:{
      id: "47ea69fec586467b9026278356bb9d3f",
    }
	});

	const view = new MapView({
    container: "kaartesri",
		map: esri,
		center: [-118.5727117,33.9342533], // Longitude, latitude
		zoom: 4 // Zoom level
		 // Div element
	});
});

//leaflet hongkong

const hongkongmap = L.map('leaflet-hongkong').setView([22.2899616,114.1513262], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(hongkongmap);

var circle = L.circle([22.2632648,114.1771249], {
  color: '#7371fc',
  fillColor: '#7371fc',
  fillOpacity: 0.5,
  radius: 500
}).addTo(hongkongmap);

circle.bindPopup("Mount Nicholson");

var circle1 = L.circle([22.2814242,114.1463342], {
  color: '#7371fc',
  fillColor: '#7371fc',
  fillOpacity: 0.5,
  radius: 500
}).addTo(hongkongmap);

circle1.bindPopup("39 Conduit Road");



var circle2 = L.circle([22.2376018,114.1913517], {
  color: '#7371fc',
  fillColor: '#7371fc',
  fillOpacity: 0.5,
  radius: 500
}).addTo(hongkongmap);

circle2.bindPopup("No 56 Repulse road");

var circle3 = L.circle([22.2804655,114.1403866], {
  color: '#7371fc',
  fillColor: '#7371fc',
  fillOpacity: 0.5,
  radius: 500
}).addTo(hongkongmap);

circle3.bindPopup("Altamira");

var circle4 = L.circle([22.3056375,114.1582326], {
  color: '#7371fc',
  fillColor: '#7371fc',
  fillOpacity: 0.5,
  radius: 500
}).addTo(hongkongmap);

circle4.bindPopup("The Cullinan");



// adressenkaart
const adresmap = L.map('adresmap').setView([52.4507725,4.7831266], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(adresmap);





L.tileLayer.wms('http://localhost:8080/geoserver/ows?', {
    'layers':'Nivine_HGAV03:Zaanstad_gemeentegrens',
    'styles': 'polygon',
    'srs': 'EPSG:28992',
    'format':'image/png',
    'opacity':0.5
}) 
.addTo(adresmap);

// end javascript 