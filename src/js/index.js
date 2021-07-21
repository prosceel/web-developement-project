import detectScrollbar from './detect-scrollbar'
import resizeWindowHeight from './resize-window-height'
import simpleParallax from 'simple-parallax-js';

document.addEventListener('DOMContentLoaded', () => {
  resizeWindowHeight()
  detectScrollbar()
});

const home = document.querySelectorAll('.home__image');
new simpleParallax(home, {
  scale: 1.3,
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});

const btnBurger = document.querySelector('.mobile-header__navigation-burger');
const menu = document.querySelector('.mobile-header__menu');
const html = document.querySelector('html');

const openMenu = () => {
  btnBurger.classList.toggle('mobile-header__navigation-burger--is-active');
  menu.classList.toggle('mobile-header__menu--is-active');
};

btnBurger.addEventListener('click', openMenu);