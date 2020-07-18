function bomDia() {
  console.log('Bom dia!')
}

const boaTarde = function() {
  console.log('Boa tarde!')
}

// passando função como parâmetro de outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// retornando função a partir de outra função
function potencia(base) {
  return function(expoente) {
    return Math.pow(base, expoente)
  }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPotencia = potencia(3)(4)
console.log(`resultado da potencia: ${resultadoPotencia}`)

function somar(primeiroNumero) {
  return function(segundoNumero) {
    return function(terceiroNumero) {
      return primeiroNumero + segundoNumero + terceiroNumero;
    }
  }
}

const resultadoSoma = somar(1)(2)(3)
console.log(resultadoSoma)


function calcular(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y)
    }
  }
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

const r1 = calcular(3)(3)(subtrair)
const r2 = calcular(3)(3)(multiplicar)
console.log(r1)
console.log(r2)