Array.prototype.meuMap = function(fn) {
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
    
  }
  return novoArray
}

const array = [1, 2, 3, 4, 5, 'f', 'g', 'h']
array.meuMap((item, indice, array) => console.log(item, indice, array))