import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adcionar a escuta
    button.addEventListener("click", event =>{
        modal.open()

        modalTitle.innerHTML = "Marcar como lida"
    })   
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {

    button.addEventListener("click", event =>{
        modalTitle.innerHTML =  "Excluir essa pergunta"
        modal.open()
    })
})


