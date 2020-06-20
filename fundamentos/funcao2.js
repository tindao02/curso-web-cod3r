// Armazenando uma função em uma variável
console.log('Armazenando uma função em uma variável')

const imprimirSoma = function(a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
console.log('\nArmazenando uma função arrow em uma variável')

const soma = (a, b) => 
{
    return a + b
}

console.log(soma(3, 6))

// Retorno implícito
console.log('\nRetorno implícito')

const subtracao = (a, b) => a - b
console.log(subtracao(7, 3))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!');

