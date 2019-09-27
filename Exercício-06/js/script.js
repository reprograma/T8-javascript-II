const formulario = document.querySelector(".transacao__form");
const tabela = document.querySelector(".extrato__table");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    let inputNome = document.getElementById("transacaoInputNome");
    let valorInputNome = inputNome.value;

    let inputPreco = document.getElementById("transacaoInputValor");
    let valorInputPreco = inputPreco.value;

    let inputData = document.getElementById("transacaoInputData");
    let valorInputData = inputData.value;

    const novaLinha = document.createElement("tr");
    tabela.appendChild(novaLinha);

    const novoNome = document.createElement("td");
    novaLinha.appendChild(novoNome);
    novoNome.textContent = valorInputNome;

    const novoPreco = document.createElement("td");
    novaLinha.appendChild(novoPreco);
    novoPreco.textContent = valorInputPreco;

    const novaData = document.createElement("td");
    novaLinha.appendChild(novaData);
    novaData.textContent = valorInputData;
});