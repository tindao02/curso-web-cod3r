const escola = 'Cod3r'

console.log(escola.charAt(4)) //exibe o caracter naquela posição
console.log(escola.charAt(5)) //exibe o caracter vazio por está fora
console.log(escola.charCodeAt(3)) //Valor na tabela ascii
console.log(escola.substring(1)) //deste p frente
console.log(escola.substring(0, 3)) //pegando espaço

console.log('Escola '.concat(escola).concat("!")) //concatenar
console.log('Escola ' + escola + "!") //concatenar

console.log(escola.replace(3, 'e')) //substituir
console.log(escola.replace(/\C/, 'e')) //substitui todas as letras C por e
console.log(escola.replace(/\w/g, 'f')) //substitui todos os caracteres por f

console.log('Ana, Maria, Pedro')
console.log('Ana, Maria, Pedro'.split(',')) //transformado em Arry