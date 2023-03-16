
//leaflet kaart//
const leafletmap = L.map('leaflet-map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletmap);

let mijnGeojsonLaag = L.geoJSON().addTo(leafletmap);

let woonplaatsen = ['amsterdam', 'leeuwarden', 'groningen']
let woonplaatsNaam = woonplaatsen[1];



//met de free service een id ophalen 

fetch(`https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=${woonplaatsNaam}&rows=10`)
.then(response => response.json())
.then(data => {
    //pak het id nr van het eersye object wat terugkomt 
    console.log(data.response.docs[0].id)
    let id = data.response.docs[0].id

    //vraag de data op en zet op de kaart 
    tekenDataOpKaart(id)
})
//Aan de hand van een ID de geometrie ophalen en op de kaart zetten. En vliegen naar die locatie 

function tekenDataOpKaart(woonplaatsId){
    const mijnEersteAPIrequest= `https://api.pdok.nl/bzk/locatieserver/search/v3_1/lookup?id=${woonplaatsId}&wt=json&fl=*`

    fetch(mijnEersteAPIrequest,{})
    .then(response => response.json())
    .then (data => { 
        console.log(data)
        console.log(data.response.docs[0].geometrie_ll)
    let = geojsonFeature = Terraformer.wktToGeoJSON(data.response.docs[0].geometrie_ll)
    mijnGeojsonLaag.addData(geojsonFeature);
    let centerCoordinates = Terraformer.wktToGeoJSON (data.response.docs[0].centroide_ll)
    console.log(centerCoordinates)
    leafletmap.flyTo(centerCoordinates.coordinates.reverse())
    })
}


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


