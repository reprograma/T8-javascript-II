const primeirasection = document.getElementById("primeira-section")
const segundasection = document.getElementById("segunda-section")
const terceirasection = document.getElementById("terceira-section")



document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop >= 200) {
        // document.documentElement.style.backgroundColor = "red";
        primeirasection.classList.add("vermelha");
    } 
    
    if (document.documentElement.scrollTop >= 401) {
        segundasection.classList.add("azul");
    }

    if (document.documentElement.scrollTop >= 491) {
        terceirasection.classList.add("verde");
    }
});

