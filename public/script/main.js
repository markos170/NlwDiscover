import Modal from './modal.js'

const modal = Modal()
//botões
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")
//marca como lida
checkButtons.forEach(button => {
    //adcionar a escuta
    button.addEventListener("click", handleClick)  
})
//constante recebendo todos os deletes que abrem o modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {

    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    
    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/:question/${slug}`)

    // constante check de strings
    const text = check ? "Marcar como lida" : "Excluir"

    //concatenando as frases dos botões
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} `

    //mudando a cor do botão excluir
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}

