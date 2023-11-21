'use strict';

/*Milestone 0:
Creare un array di oggetti composto da Url, titolo, descrizione (potete inventare titolo e descrizione).
*/
const carouselImages = [
  {
    url: '01.jpg',
    titolo: 'Uomo al lago',
    descrizione: 'Perditi nella tranquillita e il silenzio di un lago',
  },
  {
    url: '02.jpg',
    titolo: 'Paesaggio Fiabbesco',
    descrizione: 'Ecco uno dei posti piu belli e caratteriali al mondo',
  },
  {
    url: '03.jpg',
    titolo: 'Londra',
    descrizione: 'Una delle citta piu belle e sviluppate al mondo',
  },
  {
    url: '04.jpg',
    titolo: 'Citta luminosa',
    descrizione: 'Perditi nelle luci scintillanti',
  },
  {
    url: '05.jpg',
    titolo: 'Aria di mare',
    descrizione:
      'Fatti coccolare con il sole e la brezza di questa bellissima spiaggio tropicale',
  },
];

//funzioni
function nextSlide() {
  domItems[currentItem].classList.remove('active');

  if (currentItem === domItems.length - 1) {
    currentItem = 0;
  } else {
    currentItem++;
  }

  domItems[currentItem].classList.add('active');
}

//variabili per gli elementi nel DOM
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

/*Milestone 1:
Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
*/
carouselImages.forEach((item, i) => {
  const elemento = document.createElement('div');
  elemento.classList.add('item');

  if (i === 0) {
    elemento.classList.add('active');
  }
  console.log(i);

  //immagini
  const img = document.createElement('img');
  img.src = `img/${item.url}`;
  img.alt = `Random ${item.url}`;

  elemento.append(img);
  items.append(elemento);
});

const domItems = document.querySelectorAll('.item');

//frecciette di top e bottom
prev.addEventListener('click', function () {
  domItems[currentItem].classList.remove('active');

  if (currentItem === 0) {
    currentItem = domItems.length - 1;
  } else {
    currentItem--;
  }

  domItems[currentItem].classList.add('active');
});

next.addEventListener('click', nextSlide);

//autoplay
setInterval(nextSlide, 3_000);
