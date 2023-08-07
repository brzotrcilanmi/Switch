
const switcher = document.querySelector('.switch');
let firstText = document.querySelector('.prviTekst');
let secondText = document.querySelector('.drugiTekst');

function changeText(){
  if(firstText.style.display != "none"){
    secondText.style.display = "block";
    firstText.style.display = "none";
  }
  else if(firstText.style.display = "none"){
    secondText.style.display = "none";
    firstText.style.display = "block"
  }
}

switcher.addEventListener('change', changeText)