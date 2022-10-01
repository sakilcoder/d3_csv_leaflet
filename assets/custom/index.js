
const fetchText = async (url) => {
    const response = await fetch(url);
    return await response.text();
}
const csvUrl = 'assets/data/pois.csv';

let travers = 0;
// --------------------------------------------------------------------

// var tulumLayer = L.geoJSON(tulum, {
//     style: styleArea,
//     onEachFeature: onEachArea,
// });

var aoiLayer = L.geoJSON(aoi, {
    style: styleAoi,
    onEachFeature: onEachAoi,
});

// aoiLayer.on('click', function(e) { console.log(e.layer) });

var markers = L.layerGroup();

var map = L.map('map', {
    center: [20.204919296905683, -87.47374525771015],
    zoom: 16,
    layers: [basemapCarto, aoiLayer, markers] // default checked layers
});

map.options.minZoom = 14;

var baseLayers = {
    'Carto': basemapCarto,
    'Google': googleTerrain,
    'No Basemap': noBasemap,
    // 'OSM': OpenStreetMap_Mapnik,

};


var marker_geojson = { "type": "FeatureCollection" }

fetchText(csvUrl).then(text => {
    let pois = d3.csvParse(text);
    console.log(pois);
    let features = [];

    for (i = 0; i < pois.length; i++) {

        let latlng = pois[i].latlon.split(',')
        let feature = {
            "type": "Feature",
            "properties": {
                "id": pois[i].id,
                "name": pois[i].name,
                "comments": pois[i].comments,
                "hours": pois[i].hours,
                "map_url": pois[i].map_url,
                "star": pois[i].star,
                "type": pois[i].type,
                "image": pois[i].image,
            },
            "geometry": { "type": "Point", "coordinates": [parseFloat(latlng[1]), parseFloat(latlng[0])] }
        };
        features.push(feature);
    }
    marker_geojson.features = features;

    // console.log(marker_geojson);

    L.geoJSON(marker_geojson, {
        style: styleAoi,
        onEachFeature: onEachMarker,
    }).addTo(markers);

});

var overlays = {
    // 'Tulum': tulumLayer,
    'La Veleta': aoiLayer,
    'Markers': markers
};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

L.easyButton('fa-home fa-lg', function () {
    map.setView([20.204919296905683, -87.47374525771015], 17);
}).addTo(map);

let infoView = 1;
var infoPanel = document.getElementById("info");
L.easyButton('fa fa-bars fa-lg', function () {
    if (infoView == 1) {
        infoView = 0;
        infoPanel.style.display = "none";
    } else {
        infoView = 1;
        infoPanel.style.display = "block";
    }
}).setPosition('topright').addTo(map);


// var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
// var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.');
// var rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
// var parks = L.layerGroup([crownHill, rubyHill]);
// layerControl.addOverlay(parks, 'Parks');
// layerControl.addBaseLayer(OpenStreetMap_Mapnik, 'OSM');



