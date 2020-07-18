const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString())
}

console.log('1')
// readFile = funcao assincrona
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('2')

console.log('inicio da leitura de arquivo sincrona')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim da leitura de arquivo sincrona')