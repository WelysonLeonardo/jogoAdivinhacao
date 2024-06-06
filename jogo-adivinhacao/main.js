//Váriaveis 
const screen1 = document.querySelector(`.screen1`)
const screen2 = document.querySelector(`.screen2`)
const btnTry = document.querySelector(`#btnTry`)
const btnReset = document.querySelector(`#btnReset`)

const randomNumber = Math.round(Math.random() * 10);
let numberOfAttempts = 1

//Eventos 
btnTry.addEventListener(`click`, handleTryClick)
btnReset.addEventListener(`click`, handleResetClick)
document.addEventListener(`keydown`, handleEnter)

// Função callback
function handleTryClick(event){
    event.preventDefault() //Não faça o padrão

    const inputNumber = document.querySelector(`#inputNumber`) 

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        document.querySelector(`.screen2 h2`).innerText = `Acertou em ${numberOfAttempts} tentativas!`
    }
    inputNumber.value = ``
    numberOfAttempts++
}

function handleResetClick(){
    location.reload();
    toggleScreen()
    numberOfAttempts = 1
}

function toggleScreen(){
    screen1.classList.toggle(`hide`)
    screen2.classList.toggle(`hide`)
}

function handleEnter(enter){
    if (enter.key == `Enter` && screen1.classList.contains(`hide`)){
        handleResetClick()
    }
}

console.log(randomNumber)
