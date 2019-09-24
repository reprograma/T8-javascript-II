const muitosGatos = document.querySelectorAll(".item__imagem");

muitosGatos.forEach(function(gato) {
    gato.addEventListener("click", function(evento) {
        if (gato.classList.contains("invisivel")) {
            gato.classList.remove("invisivel");
        } else {
            gato.classList.add("invisivel");
        }
    })
})

