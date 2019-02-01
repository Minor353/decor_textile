/**Слайдер отзывов */
$('.reviews_list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
/****************************************************************************/


/**Слайдер галереи */
  $('.gallery_list-wrap').slick({
    dots: false,
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
/********************************************************************** */


/**Плавный скрол вверх страницы по стрелке */

  $(".footer_btn-up").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top}, 1200);
});

/******************************************************************************** */


/**Переключение табов Наши работы */
const tabContent = document.querySelectorAll('.works_gallery-wrap');
const tabBtn = document.querySelectorAll('.works_tabs-item');

if (tabBtn.length != 0) {
    tabBtn[0].classList.add('works_tabs-item--active');
tabContent[0].classList.add('works_gallery-wrap--active');

for(let i = 0; i<tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(let i = 0; i<tabBtn.length; i++){
            tabBtn[i].classList.remove('works_tabs-item--active');
        }
        tabBtn[i].classList.toggle('works_tabs-item--active');

        for(let i = 0; i<tabBtn.length; i++){
            tabContent[i].classList.remove('works_gallery-wrap--active');
        }
        tabContent[i].classList.toggle('works_gallery-wrap--active');
    })
}
} 

/****************************************************** */


/**Форма Акии для клиентов */

const offerBtn = document.querySelector('.offer_btn');
const offerForm = document.querySelector('.offer-form');

if(offerForm) {
    offerBtn.addEventListener('click', function (e) {
        e.preventDefault();
    
        offerForm.classList.add('offer-form--active');
    })
} 

/***************************************************************** */


/**Переключение табов Портфолио работ */

const galleryTabs = document.querySelectorAll('.gallery_tabs-item');
const galleryContent = document.querySelectorAll('.gallery_list-wrap');

if (galleryTabs.length != 0) {
    
    galleryTabs[0].classList.add('gallery_tabs-item--active');
    galleryContent[0].classList.add('gallery_list-wrap--active');

    for(let i = 0; i < galleryTabs.length; i++ ) {
        galleryTabs[i].addEventListener('click', function () {
            for(let i = 0; i < galleryTabs.length; i++ ) {
                galleryTabs[i].classList.remove('gallery_tabs-item--active');
            }
            galleryTabs[i].classList.toggle('gallery_tabs-item--active');

            for (let i = 0; i < galleryContent.length; i++) {
                galleryContent[i].classList.remove('gallery_list-wrap--active');
            }
            galleryContent[i].classList.toggle('gallery_list-wrap--active');
        })
    }

} 

/******************************************************* */


/***Аккардеон в контактах */

const faqBtn = document.querySelectorAll('.faq_list-content-title');
const faqContent = document.querySelectorAll('.faq_list-content-text');

if (faqContent.length != 0) {
    faqBtn[0].classList.add('faq_list-content-title--active');
    faqContent[0].classList.add('faq_list-content-text--active');


    for (let i = 0; i < faqBtn.length; i++) {
        faqBtn[i].addEventListener('click', function () {
            for (let i = 0; i < faqBtn.length; i++) {
                faqBtn[i].classList.remove('faq_list-content-title--active');
            }
            faqBtn[i].classList.toggle('faq_list-content-title--active');


            for (let i = 0; i < faqContent.length; i++) {
                faqContent[i].classList.remove('faq_list-content-text--active');
            }
            faqContent[i].classList.toggle('faq_list-content-text--active');
        })
    }
}

/******************************************************* */