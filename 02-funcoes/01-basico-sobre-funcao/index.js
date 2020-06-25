// function declaration
function bomDia() {
  console.log('Bom dia!')
}

bomDia()

// function expression: a função será anônima e atribuída a uma variável, servindo como uma expressão
const boaTarde= () => console.log('Boa tarde!')

boaTarde()

// as funções em js aceitam receber parâmetros de qualquer tipo
function somar(a, b) {
  return a + b
}

let resultado = somar(3, 4)
console.log(resultado)


// em js conseguimos passar mais parâmetros, além daqueles que foram declarados na função
// como a função "somar" espera receber 2 parâmetros, 
// apenas os dois primeiros valores passados como referencia serão considerados
resultado = somar(1, 2, 3, 4, 5, 6, 7)
console.log(resultado)

// também podemos passar menos parâmetros do que aqueles que foram declarados na função
// no caso abaixo, passaremos o primeiro valor, que será um number
// o segundo parâmetro será omitido, fazendo com que o JS insira um valor undefined para preencher-lo e não quebrar o código
// number + undefined = not a number (NaN)
resultado = somar(5)
console.log(resultado)