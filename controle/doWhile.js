function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max +1 - min) + min
    return Math.floor(valor)
}

let opcao = -1

do
{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida: ' + opcao)
}while(opcao != -1);