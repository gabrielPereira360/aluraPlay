async function listaVideos(){
    const conexao = await fetch('https://gabrielpereira360.github.io/aluraplay-api/db.json');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("https://gabrielpereira360.github.io/aluraplay-api/db.json", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok){
        throw new Error("Não foi possível enviar o video");
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo (termoDeBusca){
    const conexao = await fetch(`https://gabrielpereira360.github.io/aluraplay-api/db.json/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}