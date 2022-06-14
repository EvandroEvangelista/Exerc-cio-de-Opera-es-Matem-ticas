let firstNumber = prompt('Digite um número: ')
let secondNumber = prompt('Digite outro número: ')
const sum = Number(firstNumber) + Number(secondNumber)
const sub = Number(firstNumber) - Number(secondNumber)
const mult = Number(firstNumber) * Number(secondNumber)
const div = Number(firstNumber) / Number(secondNumber)
const restDiv = Number(firstNumber) % Number(secondNumber)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

if (firstNumber == secondNumber) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes')
}

alert('A soma dos números é igual a ' + sum)
if (sum % 2 == 0) {
  alert('A soma dos números é par')
} else {
  alert('A soma dos números é ímpar')
}
alert('A subtração dos números é igual a ' + sub)
if (sub % 2 == 0) {
  alert('A subtração dos números é par')
} else {
  alert('A subtração dos números é ímpar')
}
alert('A multiplicação dos números é igual a ' + mult)
if (mult % 2 == 0) {
  alert('A multiplicação dos números é par')
} else {
  alert('A multiplicação dos números é ímpar')
}
alert('A divisão dos números é igual a ' + div)
if (div % 2 == 0) {
  alert('A divisão dos números é par')
} else {
  alert('A divisão dos números é ímpar')
}
alert('O módulo dos números é igual a ' + restDiv)
if (restDiv % 2 == 0) {
  alert('O módulo dos números é par')
} else {
  alert('A módulo dos números é ímpar')
}
