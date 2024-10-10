
async function quantidadeDeUsuarios(){

    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const dados = await res.json();
    const res = await fetch(url)
    const nomeDasRedes = Object.keys(dados);
    const  quantidadeDeUsuarios = Object.values(dados);

    const infos = [
{
    x: nomeDasRedes,
    y: quantidadeDeUsuarios,
    type: 'bar'
}
    ]
}
