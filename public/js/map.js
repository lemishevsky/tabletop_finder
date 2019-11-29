ymaps.ready(init);
var myMap;

function init() {
  myMap = new ymaps.Map("map", {
    center: [57.5262, 38.3061], // Углич
    zoom: 11
  }, {
    balloonMaxWidth: 200,
    searchControlProvider: 'yandex#search'
  });

  // Обработка события, возникающего при щелчке
  // левой кнопкой мыши в любой точке карты.
  // При возникновении такого события откроем балун.
  myMap.events.add('click', function (e) {
    if (!myMap.balloon.isOpen()) {
      let coords = e.get('coords');
      myMap.balloon.open(coords, {
        contentHeader: 'Событие!',
        contentBody: '<p>Кто-то щелкнул по карте.</p>' +
          '<p>Координаты щелчка: ' + [
            coords[0].toPrecision(6),
            coords[1].toPrecision(6)
          ].join(', ') + '</p>',
        contentFooter: '<sup>Щелкните еще раз</sup>'
      });
    }
    else {
      myMap.balloon.close();
    }
  });

  myMap.events.add('click', function (e) {
    let coords = e.get('coords');
    const adress = document.getElementById('adress');
    adress.innerText = coords;
  });

  // Обработка события, возникающего при щелчке
  // правой кнопки мыши в любой точке карты.
  // При возникновении такого события покажем всплывающую подсказку
  // в точке щелчка.
  myMap.events.add('contextmenu', function (e) {
    myMap.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
  });

  // Скрываем хинт при открытии балуна.
  myMap.events.add('balloonopen', function (e) {
    myMap.hint.close();
  });
}


// let myMap;

// function init() {
//   myMap = new ymaps.Map('map', {
//     center: [55.751574, 37.573856],
//     zoom: 9,
//   }, {
//     searchControlProvider: 'yandex#search',
//   }),

//   // Создаём макет содержимого.
//   MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//     '<div style="color: #black; font-weight: bold;">$[properties.iconContent]</div>',
//   ),
//   user = new ymaps.Placemark(myMap.getCenter(), {
//     hintContent: 'Хочу новых фото!',
//     balloonContent: '<a href="/profile/5d9f4823c61f6833ccb0650d">Хочу новых фото!',
//     iconContent: 'You',
//   }, {
//     // Опции.
//     // Необходимо указать данный тип макета.
//     iconLayout: 'default#imageWithContent',
//     // Своё изображение иконки метки.
//     iconImageHref: 'images/profile.png',
//     // Размеры метки.
//     iconImageSize: [40, 40],
//     // Смещение левого верхнего угла иконки относительно
//     // её "ножки" (точки привязки).
//     iconImageOffset: [0, 0],
//     // Смещение слоя с содержимым относительно слоя с картинкой.
//     iconContentOffset: [6, 25],
//     // Макет содержимого.
//     iconContentLayout: MyIconContentLayout,
//   }),

//   brad = new ymaps.Placemark([55.661574, 37.573856], {
//     hintContent: 'Готов поснимать тебя',
//     balloonContent: 'Готов поснимать тебя</a>',
//     iconContent: 'Brad',
//   }, {
//     iconLayout: 'default#imageWithContent',
//     iconImageHref: 'images/brad.png',
//     iconImageSize: [40, 40],
//     iconImageOffset: [0, 0],
//     iconContentOffset: [5, 25],
//     iconContentLayout: MyIconContentLayout,
//   });
//   britney = new ymaps.Placemark([55.76, 37.59], {
//     hintContent: 'Ищу девушек для совместных съемок',
//     balloonContent: 'Ищу девушек для совместных съемок',
//     iconContent: 'Britney',
//   }, {
//     iconLayout: 'default#imageWithContent',
//     iconImageHref: '/public/images/britney.png',
//     iconImageSize: [40, 40],
//     iconImageOffset: [0, 0],
//     iconContentOffset: [5, 25],
//     iconContentLayout: MyIconContentLayout,
//   });
//   kate = new ymaps.Placemark([55.707817, 37.590692], {
//     hintContent: 'Сижу в Шоколаднице, есть идеи для фото',
//     balloonContent: 'Сижу в Шоколаднице, есть идеи для фото',
//     iconContent: 'Kate',
//   }, {
//     iconLayout: 'default#imageWithContent',
//     iconImageHref: '/public/images/kate.png',
//     iconImageSize: [40, 40],
//     iconImageOffset: [0, 0],
//     iconContentOffset: [5, 25],
//     iconContentLayout: MyIconContentLayout,
//   });
//   suzan = new ymaps.Placemark([55.741373, 37.620492], {
//     hintContent: 'Нашла отличные интерьеры для съемок',
//     balloonContent: 'Нашла отличные интерьеры для съемок',
//     iconContent: 'Suzan',
//   }, {
//     iconLayout: 'default#imageWithContent',
//     iconImageHref: '/public/images/suzan.png',
//     iconImageSize: [40, 40],
//     iconImageOffset: [0, 0],
//     iconContentOffset: [5, 25],
//     iconContentLayout: MyIconContentLayout,
//   });


//   ymaps.geolocation.get({
//     // Зададим способ определения геолокации
//     // на осноiве ip пользователя.
//     provider: 'yandex',
//     // Включим автоматическое геокодирование результата.
//     autoReverseGeocode: true,
//   })
//     .then((result) => {
//       // Выведем результат геокодирования.
//       console.log(result.geoObjects.get(0)
//         .properties.get('metaDataProperty'));
//     });

//   myMap.geoObjects
//     .add(user)
//     .add(brad)
//     .add(britney)
//     .add(kate)
//     .add(suzan);
// }

// ymaps.ready(init);
