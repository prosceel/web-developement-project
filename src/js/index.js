import detectScrollbar from './detect-scrollbar'
import resizeWindowHeight from './resize-window-height'

document.addEventListener('DOMContentLoaded', () => {
    resizeWindowHeight()
    detectScrollbar()
  })
