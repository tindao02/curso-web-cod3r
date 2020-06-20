function tratar(erro)
{
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'

}

function imprimirNome(obj)
{
    try
    {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e)
    {
        tratar(e)
    }
    finally
    {
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNome(obj)