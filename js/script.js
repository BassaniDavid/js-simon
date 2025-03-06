// richiamo countdown
const countdownElement = document.getElementById('countdown')
console.log(countdownElement)

// richiamo lista numeri
const numbersListElement = document.getElementById('numbers-list')
console.log(numbersListElement)

// richiamo form
const formElement = document.getElementById('answers-form')
console.log(formElement)

// richiamo bottone
const buttonElement = document.querySelector('button')
console.log(buttonElement)

// richiamo numeri inseriti
const numbersElement = document.querySelectorAll('input')
console.log(numbersElement)
// estraggo i numeri inseriti dalla nodelist
const numbersElementValue = extractValue()
console.log(numbersElementValue)

function extractValue() {
    let result = [];
    for (let i = 0; i < numbersElement.length; i++) {
        result.push(numbersElement[i].value);
    }
    return result
}

// funzione generatore casuale di numeri da 1 a 50
function randomGenerator(num1) {
    num1 = (Math.floor(Math.random() * 50) + 1)
    return num1
}


// funzione per countdown
let numSecCountdown = 2

const countdown = setInterval(countdownFunction, 1000)

function countdownFunction() {
    countdownElement.innerText = numSecCountdown
    if (numSecCountdown <= 0) {
        clearInterval(countdown)
        countdownElement.classList.add("d-none")
        numbersListElement.classList.add("d-none")
        formElement.classList.remove("d-none")
    }
    numSecCountdown--
}