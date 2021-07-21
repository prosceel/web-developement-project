export default () => {
    const scrollDiv = document.createElement('div')
    scrollDiv.style.width = '100px'
    scrollDiv.style.height = '100px'
    scrollDiv.style.overflow = 'scroll'
    scrollDiv.style.position = 'absolute'
    scrollDiv.style.top = '-9999px'
    document.body.appendChild(scrollDiv)
  
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
  
    document.body.removeChild(scrollDiv)
  }