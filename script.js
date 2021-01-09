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

//Loop through Buttons 
for(let i = 0; i < openModalBtn.length; i++){
  openModalBtn[i].addEventListener('click', openModal)
  closeModalBtn.addEventListener('click', closeModal)
  overlay.addEventListener('click', closeModal)
}

//Close modal with Esc Key
document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape'){
    if (!modal.classList.contains('hidden')){
      closeModal()
    }
  }
})
