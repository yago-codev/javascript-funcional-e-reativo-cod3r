const numeros = [1, 2, 3, 4, 5]
const dobro = (n, indice, array) => console.log(`
  elementos do array: ${array}
  indice: ${indice}
  numero: ${n}
  resultado ${n} * 2: ${n * 2}
`)
// a funcao map recebe uma funcao de callback.
// essa funcao de callback recebe 3 paramatros:
// o primeiro corresponde a cada valor presente no array que esta sendo acessado atraves do map,
// o segundo corresponde ao indice de cada elemento do array: 0, 1, 2, 3, 4
// o terceiro corresponde aos elementos presentes no array: 1, 2, 3, 4, 5
numeros.map(dobro)

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)