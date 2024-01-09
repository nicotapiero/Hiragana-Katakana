function changeFont(fontName) {
  document.getElementsByTagName("body")[0].style.fontFamily = fontName;
}

function hideImages() {
  for (let elem of document.getElementsByClassName("mnemonics")) {
    elem.hidden = !elem.hidden;
  }
  
  let button = document.getElementById('hideImagesButton')
  if (button.innerHTML == 'Hide Images') {
    button.innerHTML = 'Show Images'
  } else {
    button.innerHTML = 'Hide Images'
  }
}
