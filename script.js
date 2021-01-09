'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeModalBtn = document.querySelector('.close-modal')
const openModalBtn = document.querySelectorAll('.show-modal')

//Open Modal Function
function openModal() {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

//Close Modal Function
function closeModal() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for(let i = 0; i < openModalBtn.length; i++){
  openModalBtn[i].addEventListener('click', openModal)
  closeModalBtn.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
}