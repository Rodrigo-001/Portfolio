let estilosOriginais = {}

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

    // Selecionando elementos para adicionar eventlistener
    const linksComEfeitoGrow = [
        document.getElementsByClassName("link-curriculo")[0],
        document.getElementsByClassName("link-acompanhar")[0]
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
        transform: elemento.style.transform
    };
    let idElemento = (elemento.id);
    let classeDoElemento = elemento.className;   

    //EFEITO PARA LINKS DE NAVEGAÇÃO DO TOPO
    if (idElemento == "linkTopo" || idElemento == "linkSobre" || idElemento == "linkProjetos" || idElemento == "linkContatos") {        
        elemento.style.backgroundColor = '#F2A900';
        elemento.style.borderRadius = '18px';
        elemento.style.padding = '6px';
        elemento.style.color = '#FFF';
    } else if(classeDoElemento == "link-curriculo" || classeDoElemento == "link-acompanhar") {     
        elemento.style.transform = 'scale(1.05)';
    }
    
}

// Função para quando o mouse sair do elemento
function saiu(elemento) {    
    elemento.style.backgroundColor = estilosOriginais.backgroundColor;
    elemento.style.borderRadius = estilosOriginais.borderRadius;
    elemento.style.padding = estilosOriginais.padding;
    elemento.style.color = estilosOriginais.color;
    elemento.style.transform = estilosOriginais.transform;
    
    
}