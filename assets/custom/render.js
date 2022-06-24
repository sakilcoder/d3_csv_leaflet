function onEachArea(feature, layer) {

    layer.on('mouseover', function (e) {
        this.setStyle({
            'fillColor': '#a3bf82'
        });
    });

    layer.on('mouseout', function (e) {
        this.setStyle({
            'fillColor': '#b7d18a'
        });
    });

}
function onEachAoi(feature, layer) {

    layer.on('click', function (e) {
        console.log(e);
    });

    layer.on('mouseover', function (e) {
        this.setStyle({
            'fillColor': '#a3bf82'
        });
    });

    layer.on('mouseout', function (e) {
        // console.log('out-aoi');
        this.setStyle({
            'fillColor': '#719b6b'
        });
    });

}
function onEachMarker(feature, layer) {

    var icon = getIcon(feature.properties.type);
    // var icon1 = pngIcon('assets/images/markers/' + icon + '.png');
    // var icon2 = pngIcon('assets/images/markers/' + icon + '26_b.png');
    let icon1= icon[0];
    let icon2= icon[1];
    let icon3= icon[2];
    layer.setIcon(icon1);

    if(travers == 0){
        // layer.setIcon(icon2);

        if (feature.properties.star !== '')
            document.getElementById('name').innerHTML = feature.properties.name + '(<i class="fa fa-star" style="color: orange"></i>)';
        else
            document.getElementById('name').innerHTML = feature.properties.name;

        document.getElementById('type').innerHTML = feature.properties.type;

        // document.getElementById('icon').src = 'assets/images/markers/' + icon + '100.png';
        document.getElementById('icon').innerHTML = icon3;
        
        if(feature.properties.map_url==''){
            document.getElementById('amap').href = 'https://www.google.com/maps/place/NAYNA/@20.2078614,-87.4757096,15.87z/data=!4m5!3m4!1s0x8f4fd74e5feffda7:0xf68835073d0a643f!8m2!3d20.2031081!4d-87.4769701';
        }else{
            document.getElementById('amap').href = feature.properties.map_url;
        }
        
        if (feature.properties.image == '') {
            document.getElementById('aimg').src = 'assets/images/mixed/default.png';
        } else {
            document.getElementById('aimg').src = 'assets/images/mixed/' + feature.properties.image;
        }
        document.getElementById('aimg').alt = feature.properties.name;
        document.getElementById('hours').innerHTML = feature.properties.hours;
        document.getElementById('comments').innerHTML = feature.properties.comments;
    }

    ++travers;

    // layer.on('click', function(e) {
    //     console.log(e);
    // });

    layer.on('mouseover', function (e) {

        // console.log(icon);
        layer.setIcon(icon2);


        if (feature.properties.star !== '')
            document.getElementById('name').innerHTML = feature.properties.name + '(<i class="fa fa-star" style="color: orange"></i>)';
        else
            document.getElementById('name').innerHTML = feature.properties.name;

        document.getElementById('type').innerHTML = feature.properties.type;

        document.getElementById('icon').innerHTML = icon3;
        
        if(feature.properties.map_url==''){
            document.getElementById('amap').href = 'https://www.google.com/maps/place/NAYNA/@20.2078614,-87.4757096,15.87z/data=!4m5!3m4!1s0x8f4fd74e5feffda7:0xf68835073d0a643f!8m2!3d20.2031081!4d-87.4769701';
        }else{
            document.getElementById('amap').href = feature.properties.map_url;
        }
        
        if (feature.properties.image == '') {
            document.getElementById('aimg').src = 'assets/images/mixed/default.png';
        } else {
            document.getElementById('aimg').src = 'assets/images/mixed/' + feature.properties.image;
        }
        document.getElementById('aimg').alt = feature.properties.name;
        document.getElementById('hours').innerHTML = feature.properties.hours;
        document.getElementById('comments').innerHTML = feature.properties.comments;

        // console.log('hover');

        // this.setStyle({
        //     'fillColor': '#FF6B6B'
        // });
    });

    layer.on('mouseout', function (e) {
        layer.setIcon(icon1);
    });

}

var getIcon = function (type) {
    let gi = '';
    let gi2 = '';
    let gi3 = '';
    if (type == 'Restaurant, Bakery' || type == 'Restaurant, Bakery, Cafe') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">restaurant</i>';
        gi2 = '<i class="material-icons g-icon-i-l" style="font-size:16px; color: #026102">restaurant</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">restaurant</i>';
    } else if (type == 'Grocery, Supermarket, Restaurant, Bakery, Cafe') {
        gi = '<i class="fas fa-shopping-cart g-icon-i" style="font-size:12px; color: #026102"></i>';
        gi2 = '<i class="fas fa-shopping-cart g-icon-i-l" style="font-size:14px; color: #026102"></i>';
        gi3 = '<i class="fas fa-shopping-cart g-icon-i-l" style="font-size:56px; color: #026102"></i>';
    } else if (type == 'Convenience Store') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">store_mall_directory</i>';
        gi2 = '<i class="material-icons g-icon-i-l" style="font-size:16px; color: #026102">store_mall_directory</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">store_mall_directory</i>';
    } else if (type == 'Cafe') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">local_cafe</i>';
        gi2 = '<i class="material-icons g-icon-i-l" style="font-size:16px; color: #026102">local_cafe</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">local_cafe</i>';
    } else if (type == 'Pharmacy') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">local_pharmacy</i>';
        gi2 = '<i class="material-icons g-icon-i-l" style="font-size:16px; color: #026102">local_pharmacy</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">local_pharmacy</i>';
    } else if (type == 'ATM, Bank') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">local_atm</i>';
        gi2 = '<i class="material-icons g-icon-i" style="font-size:16px; color: #026102">local_atm</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">local_atm</i>';
    } else if (type == 'Police') {
        gi = '<i class="fas fa-user-shield g-icon-i" style="font-size:12px; color: #026102"></i>';
        gi2 = '<i class="fas fa-user-shield g-icon-i-l" style="font-size:14px; color: #026102"></i>';
        gi3 = '<i class="fas fa-user-shield g-icon-i-l" style="font-size:56px; color: #026102"></i>';
    } else if (type == 'Lodging' || type == 'Hotel') {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">hotel</i>';
        gi2 = '<i class="material-icons g-icon-i" style="font-size:16px; color: #026102">hotel</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">hotel</i>';
    } else {
        gi = '<i class="material-icons g-icon-i" style="font-size:14px; color: #026102">place</i>';
        gi2 = '<i class="material-icons g-icon-i" style="font-size:16px; color: #026102">place</i>';
        gi3 = '<i class="material-icons g-icon-i-l" style="font-size:56px; color: #026102">place</i>';
    }
    var icon1 = GoogleIcon('<span class="g-icon">' + gi + '</span>');
    var icon2 = GoogleIcon('<span class="g-icon">' + gi2 + '</span>');
    var icon3 = gi3;
    return [icon1, icon2, icon3];
}
// var getIcon = function (type) {
//     let png = '';
//     if (type == 'Restaurant, Bakery' || type == 'Restaurant, Bakery, Cafe') {
//         png = 'restaurant';
//     } else if (type == 'Grocery, Supermarket, Restaurant, Bakery, Cafe') {
//         png = 'store';
//     } else if (type == 'Cafe') {
//         png = 'cafe';
//     } else if (type == 'Pharmacy') {
//         png = 'pharmacy';
//     } else if (type == 'ATM, Bank') {
//         png = 'atm';
//     } else if (type == 'Police') {
//         png = 'police';
//     } else {
//         png = 'other';
//     }

//     return png;
// }

