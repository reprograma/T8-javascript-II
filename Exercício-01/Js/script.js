const alunas = ["Raquele Pereira", "Talita Barbosa", "Lia Lobo", "Daiana Moraes"];

for (
    let indice = 0;
    indice < alunas.length; indice++
) {
    let lista = document.createElement("li")
    lista.textContent = alunas[indice]
    let element = document.getElementById("lista-alunas")
    element.appendChild(lista)
}

//ou

const lista = document.getElementById("Lista-alunas")

for (let i = 0; i < alunas.length; i++) {
    let item = document.createElement("li")

}

//ou 

const lista = document.getElementById("Lista-alunas")

alunas.forEach(function (aluna) {
    let item = document.createElement('li');

    item.textContent = aluna;
    lista.appendChild(item);
})



let soma = 0;

const meuTitulo = document.querySelector('.titulo');

meuTitulo.addEventListener('click', function logar(){
    console.log(soma++) 
    //meuTitulo.style.color = "red";
    meuTitulo.classList.add("vermelha");
});