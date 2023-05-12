import './style.css'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Masonry from 'masonry-layout'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()

Swiper.use([Navigation, Pagination]);


var elem = document.querySelector('.masonry-grid');

var msnry = new Masonry( elem, {
  itemSelector: '.masonry-grid-item',
});

function callMasonry() {
  alert('hello')
  msnry.layout();
}

window.callMasonry = callMasonry;


const swiper = new Swiper(".mySwiper", {
    loop: false,
    draggable: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
});

const swiperQuotes = new Swiper(".swiperQuotes", {
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// ===== Masonry ======


