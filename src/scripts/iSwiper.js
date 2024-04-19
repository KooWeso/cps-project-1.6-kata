import Swiper from "swiper";
import {
    Pagination
} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

function slider() {
    return new Swiper(".swiper", {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets: 5,
            clickable: true,
        },

        centeredSlides: true,
        spaceBetween: 16,
        toggle: true,
        loop: true,
        slidesPerView: 'auto',

        breakpoints: {
            320: {
                slidesPerView: 1.3,
            },

            360: {
                slidesPerView: 1.4,
            },

            500: {
                slidesPerView: 1.6,
            },

            640: {
                slidesPerView: 1.9,
            },

            680: {
                centeredSlides: true,
                spaceBetween: 16,
                toggle: true,
                loop: true,

                slidesPerView: 2.1,
            },

            768: {
                toggle: false,
                loop: false,
                spaceBetween: 'auto',
                slidesPerView: "auto",
                centeredSlides: false,
            },
        },
    });
}

export default slider