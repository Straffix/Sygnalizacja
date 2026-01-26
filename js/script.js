const btnRed = document.querySelector('#btnRed')
const btnYellow = document.querySelector('#btnYellow')
const btnGreen = document.querySelector('#btnGreen')
const btnReset = document.querySelector('#btnReset')

const redLight = document.querySelector('#redLight')
const yellowLight = document.querySelector('#yellowLight')
const greenLight = document.querySelector('#greenLight')

function redSign() {
	redLight.classList.add('red-light')
	yellowLight.classList.remove('yellow-light')
	greenLight.classList.remove('green-light')
}
function yellowSign() {
	yellowLight.classList.add('yellow-light')
	redLight.classList.remove('red-light')
	greenLight.classList.remove('green-light')
}
function greenSign() {
	greenLight.classList.add('green-light')
	yellowLight.classList.remove('yellow-light')
	redLight.classList.remove('red-light')
}

function dangerSign() {
	yellowLight.classList.toggle('danger-light')
	redLight.classList.remove('red-light')
	yellowLight.classList.remove('yellow-light')
	greenLight.classList.remove('green-light')
}

function resetButton() {
	redLight.classList.remove('red-light')
	yellowLight.classList.remove('yellow-light')
	greenLight.classList.remove('green-light')
	yellowLight.classList.remove('danger-light')
}

btnRed.addEventListener('click', redSign)
btnYellow.addEventListener('click', yellowSign)
btnGreen.addEventListener('click', greenSign)
btnDanger.addEventListener('click', dangerSign)
btnReset.addEventListener('click', resetButton)
