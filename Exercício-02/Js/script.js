


// const lista = document.querySelector('.item');

// // item.addEventListener('click', function fadeout (){

// // })

// let lista = document.getElementsByTagName('item');
// let itens = lista.getElementsByClassName('item__imagem');

// itens.removeChild(lista[0])

const muitosGatos = document.querySelectorAll('.item__imagem');

// muitosGatos.forEach(function (gato) {

//     gato.addEventListener('click', function (evento) {
//         evento.target.classList.add("invisivel");
//         gato.classList.add('minha-classe')
//     })
// })

//ou

muitosGatos.forEach(function (gato) {

    gato.addEventListener ('click', function (evento) {
        if (evento.classList.contains("invisivel") === true); {
            gato.classList.remove('invisivel')
        } else {
            gato.classList.add('invisivel');
        }
    })
})
