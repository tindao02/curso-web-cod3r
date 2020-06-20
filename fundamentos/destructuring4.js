function rand ( [ min = 0, max = 1000 ])
{
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max +1 - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([999]))
console.log(rand([, 10]))
console.log(rand([]))