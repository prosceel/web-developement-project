export default () => {
    const scrollToElement = require('scroll-to-element');

    const home = document.querySelector('.home');

    scrollToElement(home, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });
}