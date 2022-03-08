'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
console.log(buttonsOpenModal);

for (let index = 0; index < buttonsOpenModal.length; index++) {
  console.log(buttonsOpenModal[index].textContent);
}
