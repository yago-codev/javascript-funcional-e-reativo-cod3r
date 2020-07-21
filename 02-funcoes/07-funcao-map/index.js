const carrinho = [
  { produto: 'Caneta', quantidade: 10, preco: 7.99 },
  { produto: 'Impressora', quantidade: 0, preco: 649.50 },
  { produto: 'Caderno', quantidade: 4, preco: 27.10 },
  { produto: 'Lapis', quantidade: 3, preco: 5.82 },
  { produto: 'Tesoura', quantidade: 1, preco: 19.20 },
]

const nomesProdutos = carrinho => carrinho.map(item => item.produto)
console.log(nomesProdutos(carrinho))

const valorFinalProdutos = carrinho => carrinho.map(item => item.quantidade * item.preco)
console.log(valorFinalProdutos(carrinho))