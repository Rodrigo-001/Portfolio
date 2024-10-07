/*Melhorias para o portfólio
Adicionar eventlistener nos botões - on enter;
Adicionar eventlistener nos projetos - on enter;
Adicionar botão para voltar ao topo e ao rodape;
Adicionar botão para idioma - pt-br e en-us;
Adicionar novas seções de projetos: Java Script.
Adicionar botão para modo escuro e claro;*/
function aocarregar() {
    // Selecionando elementos para adicionar eventlistener
    let linkTopo = document.getElementById("linkTopo")
    let linkSobre = document.getElementById("linkSobre")
    let linkProjetos = document.getElementById("linkProjetos")
    let linkContatos = document.getElementById("linkContatos")

    // Adicionando eventlistener nos elementos
    linkTopo.addEventListener("mouseenter", function () {
        entrou(linkTopo)
    });
    linkTopo.addEventListener("mouseleave", function () {
        saiu(linkTopo)
    });

    linkSobre.addEventListener("mouseenter", function () {
        entrou(linkSobre)
    });
    linkSobre.addEventListener("mouseleave", function () {
        saiu(linkSobre)
    });

    linkProjetos.addEventListener("mouseenter", function () {
        entrou(linkProjetos)
    });
    linkProjetos.addEventListener("mouseleave", function () {
        saiu(linkProjetos)
    });

    linkContatos.addEventListener("mouseenter", function () {
        entrou(linkContatos)
    });
    linkContatos.addEventListener("mouseleave", function () {
        saiu(linkContatos)
    });            
}

// Função para quando o mouse entrar no elemento
function entrou(elemento) {
    elemento.style.backgroundColor = '#F2A900';
    elemento.style.borderRadius = '18px';
    elemento.style.padding = '6px';
    elemento.style.fontSize = '22px';
    console.log("Entroou");
}

// Função para quando o mouse sair do elemento
function saiu(elemento) {
    elemento.style.backgroundColor = '#FFF';
    elemento.style.borderRadius = '18px';
    elemento.style.padding = '6px';
    elemento.style.fontSize = '14px';
    console.log("Saiu");       
}