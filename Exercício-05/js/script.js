const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const listaMae = document.getElementById("lista-do-catalogo");

for (let propriedade in livros) {
    const meuLivro = document.createElement("li");
    listaMae.appendChild(meuLivro);
    meuLivro.classList.add("livro");
    
    const tituloLivro = document.createElement("h3");
    meuLivro.appendChild(tituloLivro);
    tituloLivro.textContent = livros[propriedade]["titulo"];
    tituloLivro.classList.add("livro__titulo");
    
    const nomeAutor = document.createElement("p");
    meuLivro.appendChild(nomeAutor);
    nomeAutor.textContent = livros[propriedade]["quemEscreveu"];
    nomeAutor.classList.add("livro__autoria");
    
    const linkLivro = document.createElement("a");
    meuLivro.appendChild(linkLivro);
    linkLivro.setAttribute("href", livros[propriedade]["link"]);
    linkLivro.textContent = "Leia aqui";
    linkLivro.classList.add("livro__link");

    const botaoJaLi = document.createElement("button");
    meuLivro.appendChild(botaoJaLi)
    botaoJaLi.textContent = "Marcar como lido";
    botaoJaLi.classList.add("botao-lido");

/*     const botaoDesfazer = document.createElement("button");
    meuLivro.appendChild(botaoDesfazer);
    botaoDesfazer.textContent = "Desfazer";
    botaoDesfazer.classList.add("botao-desfazer"); */

    botaoJaLi.addEventListener("click", function() {
        //Criando um toggle
        // Verifica se o título já está marcado como lido
        if (tituloLivro.classList.contains("livro__titulo--lido")) {
            //Marco o título como não lido
            tituloLivro.classList.remove("livro__titulo--lido");
            
            // Volto o botão para verde e volto o texto inicial
            botaoJaLi.textContent = "Marcar como lido";
            botaoJaLi.classList.remove("botao-lido--vermelho");
        } else {
            // Marca o livro como lido - tick
            tituloLivro.classList.add("livro__titulo--lido");

            // Deixa o botão vermelho e modifica o texto inicial
            botaoJaLi.textContent = "Marcar como não lido";
            botaoJaLi.classList.add("botao-lido--vermelho");
        };
    });

    // E se forem botões separados?
/*     botaoDesfazer.addEventListener("click", function(){
        tituloLivro.classList.remove("livro__titulo--lido");
    }); */
}
