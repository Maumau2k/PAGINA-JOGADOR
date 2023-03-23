function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt','Gabriel Fillipe jogando Curitiba Cup 2023')

  } else{
    img.setAttribute('src','./assets/avatar.png')
  }

}