const saudacao = 'Opa' // contexto léxico 1

function exec()
{
    const saudacao = 'Falaa';
    return saudacao;
}

// objetos são grupos aninhados de pares nome/valor
const cliente = 
{
    nome: 'Pedro',
    idade: 32,
    peso: 96,
    endereco:
    {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())

console.log(cliente)