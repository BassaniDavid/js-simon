// richiamo countdown
const countdownElement = document.getElementById('countdown')
console.log(countdownElement)

// richiamo lista per numeri generati dal pc
const numbersPcElementList = document.getElementById('numbers-list')
console.log(numbersPcElementList)

// richiamo form
const formElement = document.querySelector('form')
console.log(formElement)

// richiamo bottone
const buttonElement = document.querySelector('button')
console.log(buttonElement)

// richiamo numeri inseriti
let numbersElement = document.querySelectorAll('input')
console.log(numbersElement)

// richiamo risultato
let result = document.getElementById('message')

// numero secondi countdown
let numSecCountdown = 10

// applicazione del countdown
const countdown = setInterval(countdownFunction, 1000)

// assegno 5 numeri casuali al pc
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li')
    li.append(randomGenerator())
    numbersPcElementList.appendChild(li)
}

// previene che la pagina si ricarichi premento il bottone e che i dati vengano persi
formElement.addEventListener('submit', (event) => {
    event.preventDefault()
})

// azione all'invio dei dati inseriti dall'utente
buttonElement.addEventListener('click', () => {
    // estraggo i numeri inseriti dal generatore casuale per il pc
    let numbersPcElementsNodeList = document.querySelectorAll('li')
    console.log(numbersPcElementsNodeList)
    let numbersPcElements = extractInnerText(numbersPcElementsNodeList)
    console.log(numbersPcElements)

    // estraggo i numeri inseriti dall'utente
    let numbersUSerElements = extractValue(numbersElement)
    console.log(numbersUSerElements)

    let counterNum= 0
    let correctNum= []

    for (let i = 0; i <numbersPcElements.length; i++){
        let correntPcNUm = numbersPcElements[i]
        for(let i = 0; i <numbersUSerElements.length; i++){
            if(numbersUSerElements[i] === correntPcNUm){
                counterNum = counterNum +1
                correctNum.push(' ' +correntPcNUm)
            }
        }
    }
    console.log(counterNum)
    result.innerText=`complimenti! hai imbroccato: ${counterNum} numeri! I numeri che hai indovinato sono: ${correctNum}.`
}
)

// FUNZIONI

// funzione per countdown

function countdownFunction() {
    countdownElement.innerText = numSecCountdown
    if (numSecCountdown <= 0) {
        clearInterval(countdown)
        countdownElement.classList.add("d-none")
        numbersPcElementList.classList.add("d-none")
        formElement.classList.remove("d-none")
    }
    numSecCountdown--
}

// funzione generatore casuale di numeri da 1 a 50
function randomGenerator(num1) {
    num1 = (Math.floor(Math.random() * 50) + 1)
    return num1
}

// ESTRAI VALORE UTENTE
function extractValue(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(input[i].value);
    }
    return result
}

// ESTRAI NUMERI PC
function extractInnerText(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        result.push(input[i].innerText);
    }
    return result
}