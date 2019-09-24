const primeiraSection = document.getElementById("primeira-section");
const segundaSection = document.getElementById("segunda-section");
const terceiraSection = document.getElementById("terceira-section");

document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 200) {
        primeiraSection.classList.add("vermelha");
    }
    
    if (document.documentElement.scrollTop > 401) {
        segundaSection.classList.add("azul");
    }

    if (document.documentElement.scrollTop > 650) {
        terceiraSection.classList.add("verde");
    }
});

