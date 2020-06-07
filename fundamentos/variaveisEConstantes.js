/**
 * Arquivo para mostra as diferenças entre as formas de declaração de variáveis
 * 
 * var, let e const
 * 
 * evitar usar o var e dar preferência ao let
 * const usar quando não mudar o valor daquela variável
 */

var a = 3
let b = 4

var a = 30
//let b = 40
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50

console.log(c)