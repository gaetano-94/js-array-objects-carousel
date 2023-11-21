'use strict';

//variabili per gli elementi nel DOM
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

for (let i = 0; i < images.length; i++) {
  const item = document.createElement('div');
  item.classList.add('item');

  //contenitori delle mie immagini
  if (i === currentItem) {
    item.classList.add('active');
  }

  //immagini
  const img = document.createElement('img');
  img.src = `img/${images[i]}`;
  img.alt = `Random ${i}`;

  item.append(img);
  items.append(item);
}

const domItems = document.querySelectorAll('.item');
//immagini in automatico
setInterval(autplay, 3_000);

function autplay() {
  if (currentItem < domItems.length - 1) {
    domItems[currentItem].classList.remove('active');

    currentItem++;

    domItems[currentItem].classList.add('active');
  }
}

//frecciette di top e bottom
prev.addEventListener('click', function () {
  if (currentItem > 0) {
    domItems[currentItem].classList.remove('active');

    currentItem--;

    domItems[currentItem].classList.add('active');
  }
});

next.addEventListener('click', function () {
  if (currentItem < domItems.length - 1) {
    domItems[currentItem].classList.remove('active');

    currentItem++;

    domItems[currentItem].classList.add('active');
  }
});
