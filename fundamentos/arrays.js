const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 11
console.log(valores)

console.log(valores.length)

valores.push(50)
console.log(valores)

valores.push({id: 3}, false, null, 'texto')
console.log(valores)

console.log(valores.pop)

console.log(valores)

delete valores[10]
console.log(valores)

