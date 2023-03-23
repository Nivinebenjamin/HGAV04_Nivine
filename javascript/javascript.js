
//leaflet kaart//
const leafletmap = L.map('leaflet-map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletmap);

L.tileLayer.wms('http://localhost:8080/geoserver/ows?', {
    'layers':'Nivine_HGAV03:gemeente_2021_v1',
    'styles': 'polygon',
    'srs': 'EPSG:28992',
    'format':'image/png',
    'opacity':0.5
}) .addTo(leafletmap);


var leaflet= {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "New York"
        },
        "geometry": {
          "coordinates": [
            -73.99550882510259,
            40.71410093339094
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
    ]
  };




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




