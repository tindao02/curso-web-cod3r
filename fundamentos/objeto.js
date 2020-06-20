const prod1 = 
{

}

prod1.nome = 'Celular Untra Mega'
prod1.preco = 4990.99
console.log(prod1)

prod1['desconto legal'] = 0.40 // evitar usar atributos com espaço
console.log(prod1)

const prod2 = 
{
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(prod2)

const prod3 = 
{
    nome: 'Camisa Polo',
    preco: 79.90,

    obj:
    {
        blabla: 1,
        obj:
        {
            blabla2: 2
        }
    }
}
console.log(prod3)

