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