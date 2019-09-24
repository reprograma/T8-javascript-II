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
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
```

### Como criar um novo elemento no DOM

```Javascript
const novoElemento = document.createElement()
```

### Como inserir um elemento dentro de um elemento pai

```Javascript
// pai.appendChild(filho)
const pai = document.getElementById("meu-id")

pai.appendChild(novoElemento)
```
