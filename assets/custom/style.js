
var styleArea = {
    weight: 0.8,
    color: "#fff",
    opacity: 1,
    fillColor: "#b7d18a",
    fillOpacity: .8
}
var styleAoi = {
    weight: 2,
    color: "#026102",
    opacity: 1,
    fillColor: "#719b6b",
    fillOpacity: .1
}

let GoogleIcon = function (html) {
    return L.divIcon({
        html: html,
        iconSize: [16, 16],
        className: 'my-google-icon'
    });
}

let pngIconStyle = L.Icon.extend({
    options: {
       iconSize: [16, 25]
    }
});

let pngIcon = function (url) {
    return new pngIconStyle({
        iconUrl: url
    })
}