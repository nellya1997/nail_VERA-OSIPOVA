// const swiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//   });

let swiperWork = document.querySelectorAll('.swiper');

swiperWork.forEach(function (work){
    let swipers = new Swiper(work, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    });