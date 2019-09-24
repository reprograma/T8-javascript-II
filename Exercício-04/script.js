let pinguim = {
    "nome": "Emilia",
    "idade": 9,
    "origem": "Norte",
}

pinguim.andar = function() {
    console.log("Andou");
}

pinguim.podeVoar = false;

pinguim.voar = function() {
    if (pinguim.podeVoar) {
        console.log('Voou');
    } else {
        console.log('Pinguim não voa ainda');
    }
}
