$(document).ready(() => {
    $('.release-slider').slick({
        vertical: true,
        dots: true,
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        appendDots: '.release-dots',
        autoplay: true,
        cssEase: 'ease-in-out',
        draggable: false,
        zIndex: 5,
    })

})

function randomWidth(min, max) {
    let elementWidth = `${Math.floor(Math.random() * (max - min) + min)}%`;
    return elementWidth;
}
document.addEventListener('DOMContentLoaded', () => {
    let cardList = document.querySelectorAll('.collab-card');
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].style.width = randomWidth(30, 80);
    }
}, { passive: true })