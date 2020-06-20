//função sem retorno
console.log("função sem retorno")

function imprimirSoma(a, b)
{
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()

//função com retorno
console.log("\nfunção com retorno")
function soma(a, b = 0)
{
    return a + b
}

console.log(soma(2, 3))
console.log(soma(1))
console.log(soma())