/*
   OBJETIVO - quando clicar no cyberdev da listagem temos que esconder o cartão do cyberdev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de cyberdev
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um cyberdev da lista pegamos o id desse cyberdev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o cyberdev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no cyberdev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de cyberdev
const listaSelecaoCyberdevs = document.querySelectorAll(".cyberdev");
console.log(listaSelecaoCyberdevs);

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoCyberdevs.forEach(cyberdev => {
    cyberdev.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        const cartaoCyberdevAberto = document.querySelector(".aberto");
        cartaoCyberdevAberto.classList.remove("aberto");

        //PASSO 4 - ao clicar em um cyberdev da lista pegamos o id desse cyberdev pra saber qual cartão abrir
        const idCyberdevSelecionado = cyberdev.attributes.id.value;
        const idDoCartaoCyberdevParaAbrir = "cartao-"+ idCyberdevSelecionado;
        const cartaoCyberdevParaAbrir = document.getElementById(idDoCartaoCyberdevParaAbrir);
        cartaoCyberdevParaAbrir.classList.add("aberto");

        //PASSO 5 - remover a classe ativo que marca o cyberdev selecionado na listagem
        const cyberdevAtivoNaListagem = document.querySelector(".ativo");
        cyberdevAtivoNaListagem.classList.remove("ativo");

        //PASSO 6 - adicinar a classe ativo no cyberdev selecionado na listagem
        const cyberdevSelecionadoNaListagem = documnet.getElementById(idCyberdevSelecionado);
        cyberdevSelecionadoNaListagem.classList.add("ativo");
    })
})







