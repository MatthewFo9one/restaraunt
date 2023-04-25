
function init() {
    let map = new ymaps.Map('map',{
        center:[59.945702, 30.349187],
        zoom:17
    })

    let placemark = new ymaps.Placemark([59.945702, 30.349187],{},{
        iconLayout: 'default#image',
        iconImageHref: './imgs/marker-icon.png',
        iconImageSize: [30,30],
        iconImageOffset: [0,0]
    });

    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('zoomControl')
    map.controls.remove('rulerControl')
    map.controls.remove(['scroolZoom'])
    // map.controls.remove('')

    map.geoObjects.add(placemark)
}

ymaps.ready(init)



// 074042fc-abbb-4dbf-b42e-e98227350fc1
