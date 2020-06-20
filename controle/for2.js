const notas = [6.7, 7.4, 98, 8.1, 7.1]

for(f in notas)
{
    console.log(f, notas[f])
}

const pessoa = 
{
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa)
{ 
    console.log(`${atributo} = ${pessoa[atributo]}`)
}