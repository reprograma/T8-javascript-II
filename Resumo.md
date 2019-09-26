### Chamar o JS dentro do HTML

Você precisa avisar ao navegador que existe um arquivo Javascipt e que ele precisa carregá-lo.

```HTML
<script src="./js/hello.js"></script>
```

```HTML
<script>
    Seu script
    Essa não é uma boa prática, serve apenas para exercícios e pequenos testes.
</script>
```

### Formas de capturar um elemento do DOM

```Javascript
document.getElementById("meu-id")
document.getElementsByClassName("minha-classe")
document.getElementsByTagName("minha-tag")
document.querySelector(".classe ou #id ou tag")
document.querySelectorAll(".classe ou #id ou tag")
```

### Como criar um novo elemento no DOM

```Javascript
const novoElemento = document.createElement("tag-HTML-que-você-quer-criar")
```

### Como inserir um elemento dentro de um elemento pai

```Javascript
// pai.appendChild(filho)
const pai = document.getElementById("meu-id")

pai.appendChild(novoElemento)
```

### Como adicionar atributo a um elemento

```Javascript
elemento.setAttribute("atributo-que-você-quer-criar", "valor-do-atributo");
```

### Como pegar o valor de um atributo

```Javascript
elemento.getAttribute("atributo-que-você-quer-pegar");
```