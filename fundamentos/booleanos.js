let isAtivo = false
console.log('#01')
console.log(isAtivo)

isAtivo = true
console.log('\n#02')
console.log(isAtivo)

isAtivo = 1
console.log('\n#03')
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('\n#04')
console.log(!true)
console.log(!!true)

console.log('\n#05 Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\n#06 Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\n#07 pra finalizar...')
console.log(!!('' || null || 0 || 'epa'))
console.log(('' || null || 0 || 'epa'))
console.log(('' || null || 0 || ''))

console.log('\n#08 Com nomes')
let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Jeová Cosme'
console.log(nome || 'Desconhecido')