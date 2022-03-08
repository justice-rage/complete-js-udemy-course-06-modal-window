'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
console.log(buttonsOpenModal);

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let index = 0; index < buttonsOpenModal.length; index++) {
  buttonsOpenModal[index].addEventListener('click', openModal);
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden'))
    closeModal();
  }
})
