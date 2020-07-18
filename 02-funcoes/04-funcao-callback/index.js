const exec = (fn, a, b) => fn(a, b)

const somarNoTerminal = (x, y) => console.log(x + y)
const subtratirNoTerminal = (w, z) => console.log(w - z)
const subtrair = (c, d) => c - d

exec(somarNoTerminal, 56, 38)
exec(subtratirNoTerminal, 56, 38)

const resultadoSubtracao = exec(subtrair, 5, 3)
console.log(resultadoSubtracao)

const callback = () => console.log('Exec...')
setInterval(callback, 1000)