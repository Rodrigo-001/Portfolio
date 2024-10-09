function aocarregar() {
    // Selecionando elementos para adicionar eventlistener
    const linksTopo = [
        document.getElementById("linkTopo"),
        document.getElementById("linkSobre"),
        document.getElementById("linkProjetos"),
        document.getElementById("linkContatos")
    ];

    // Adicionando eventListeners nos links de navegação do cabeçalho
    linksTopo.forEach(link => {
        link.addEventListener("mouseenter", () => entrou(link));
        link.addEventListener("mouseleave", () => saiu(link));
    });   
}

// Função para quando o mouse entrar no elemento
function entrou(elemento) {    
    elemento.style.backgroundColor = '#F2A900';
    elemento.style.borderRadius = '18px';
    elemento.style.padding = '6px';
    elemento.style.color = '#FFF';
}

// Função para quando o mouse sair do elemento
function saiu(elemento) {
    elemento.style.backgroundColor = '#FFF';
    elemento.style.borderRadius = '0px';  
    elemento.style.color = '#000';
}