// arrow function
const olaMundo = () => console.log('Ola mundo')
olaMundo()

const saudacao = nome => `Fala ${nome}!!!`
console.log(saudacao('Yago'))

const somar = (...numeros) => {
  console.log(Array.isArray(numeros))
  let total = 0
  for (let n of numeros) {
    total += n
  }
  return total
}
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => expoente => Math.pow(base, expoente)
console.log(potencia(3)(4))

// this
Array.prototype.ultimo = function() {
  console.log(this[this.length -1])
}

const numeros = [1, 2, 3]
numeros.ultimo()

const subtrair = (a, b) => a - b
console.log(subtrair(5, 3))