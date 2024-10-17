let estilosOriginais = {}

function aocarregar() {
    // eventListeners dos links de navegação do cabeçalho
    const linksTopo = [
        document.getElementById("linkTopo"),
        document.getElementById("linkSobre"),
        document.getElementById("linkProjetos"),
        document.getElementById("linkContatos"),        
    ];    
    linksTopo.forEach(link => {
        link.addEventListener("mouseenter", () => entrou(link));
        link.addEventListener("mouseleave", () => saiu(link));
    });   

    // eventListeners dos cards de projetos
    const cards = document.querySelectorAll(".card-projeto");    
    cards.forEach(card => {        
        card.addEventListener("mouseenter", () => entrou(card));
        card.addEventListener("mouseleave", () => saiu(card));
    });

    // eventListeners dos links de contato
    const linksContato = document.querySelectorAll(".linkContato");
    linksContato.forEach(contato => {
        contato.addEventListener("mouseenter", ()=> entrou(contato));
        contato.addEventListener("mouseleave", ()=> saiu(contato))
    });

    // eventListeners dos links de navegação do rodapé    
    const linksNavRodape = document.querySelectorAll(".linkNavegacaoRodape");
    linksNavRodape.forEach(link => {
        link.addEventListener("mouseenter", ()=> entrou(link)),
        link.addEventListener("mouseleave", ()=> saiu(link))
    });
   
    // eventListeners dos demais links
    const linksComEfeitoGrow = [
        document.getElementsByClassName("link-curriculo")[0],
        document.getElementsByClassName("link-acompanhar")[0],       
        document.getElementById("botaoContateMe")
    ]; 
    linksComEfeitoGrow.forEach(link => {        
        link.addEventListener("mouseenter", () => entrou(link));
        link.addEventListener("mouseleave", () => saiu(link));
    });
}
// Função para quando o mouse entrar no elemento
function entrou(elemento) {    
    estilosOriginais = {
        backgroundColor: elemento.style.backgroundColor,
        borderRadius: elemento.style.borderRadius,
        padding: elemento.style.padding,
        color: elemento.style.color,
        transform: elemento.style.transform,
        textDecoration: elemento.style.textDecoration,
    };
    let idElemento = (elemento.id);
    let classeDoElemento = elemento.className;   

    // Links de navegação do topo
    if (idElemento == "linkTopo" || idElemento == "linkSobre" || idElemento == "linkProjetos" || idElemento == "linkContatos") {        
        elemento.style.backgroundColor = '#F2A900';
        elemento.style.borderRadius = '18px';
        elemento.style.padding = '6px';
        elemento.style.color = '#FFF';    
    } 
    // Link para curriculo
    else if(classeDoElemento == "link-curriculo" || classeDoElemento == "link-acompanhar") {     
        elemento.style.transform = 'scale(1.05)';
    }
    // Links de navegação do rodapé
    else if(classeDoElemento == "linkNavegacaoRodape") {
        elemento.style.textDecoration = "underline";
    }
    // Botão Contate-me
    else if (idElemento == "botaoContateMe") {        
        elemento.style.transform = 'scale(1.05)';
    }
    // Cards de projetos
    else if (elemento.classList.contains("card-projeto")) {                
        elemento.style.transform = 'scale(1.01)';
        elemento.style.boxShadow = "1px 4px 10px rgba(0, 0, 0, 0.714)";
    }
    // Links para contato
    else if (classeDoElemento == "linkContato") {
        elemento.style.transform = 'scale(1.05)';
    }
}

// Função restaurar os estilos originais do elemento
function saiu(elemento) {    
    elemento.style.backgroundColor = estilosOriginais.backgroundColor;
    elemento.style.borderRadius = estilosOriginais.borderRadius;
    elemento.style.padding = estilosOriginais.padding;
    elemento.style.color = estilosOriginais.color;
    elemento.style.transform = estilosOriginais.transform;
    elemento.style.textDecoration = estilosOriginais.textDecoration;
}