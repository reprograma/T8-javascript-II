const formulario = document.getElementById("formulario-de-comentarios");
const todosOsComentarios = document.getElementById("todos-os-comentarios");
const erro = document.querySelector(".meu-erro");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    let inputUsuario = document.querySelector(".input-de-texto");

    let mensagem = inputUsuario.value.trim();

    if (mensagem === "") {

        erro.textContent = "Escreva algo, senhora";

    } else {
        erro.textContent = "";

        let comentario = document.createElement("p");

        comentario.textContent = mensagem;
    
        todosOsComentarios.appendChild(comentario);
    
        comentario.classList.add("comentario");
    
        formulario.reset();
        // OU inputUsuario.value = "";
    }

    
});

