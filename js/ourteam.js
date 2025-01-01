// Testimonials carousel
$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    animateIn: 'slideInDown',
    animateOut: 'slideOutDown',
    items: 1,
    smartSpeed: 450,
    dots: false,
    loop: true,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
