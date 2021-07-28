export default () => {
    const scrollToElement = require('scroll-to-element');
    const scrollToAbout = require('scroll-to-element');
    const scrollToServices = require('scroll-to-element');
    const scrollToPortfolio = require('scroll-to-element');
    const scrollToBlog = require('scroll-to-element');
    const scrollToContacts = require('scroll-to-element');

    const home = document.querySelector('.home');
    const about = document.querySelector('.about-us');
    const services = document.querySelector('.our-services');
    const portfolio = document.querySelector('.latest-works');
    const blog = document.querySelector('.blog');
    const contacts = document.querySelector('.contacts');

    scrollToElement(home, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });
    

    scrollToAbout(about, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });
    scrollToServices(services, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });

    scrollToPortfolio(portfolio, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });

    scrollToBlog(blog, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });

    scrollToContacts(contacts, {
        offset: -150,
        ease: 'linear',
        duration: 500
    });
}