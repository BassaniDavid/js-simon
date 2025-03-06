// richiamo countdown
const countdownElemt = document.getElementById('countdown')
console.log(countdownElemt)

// richiamo lista numeri
const numbersListElement = document.getElementById('numbers-list')
console.log(numbersListElement)

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