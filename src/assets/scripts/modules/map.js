function ready(){
    ymaps.ready(init);
    function init(){ 
         
        var myMap = new ymaps.Map('map', {
            center: [59.934, 30.325],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
           
            iconLayout: 'default#image',
            
            iconImageHref: '../img/icons/map-marker.svg',
           
            iconImageSize: [30, 42],
           
            iconImageOffset: [-5, -38]
        });     

        
        

    
    }
}   
document.addEventListener("DOMContentLoaded", ready);