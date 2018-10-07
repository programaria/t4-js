
let perguntaUm = prompt("nome do pato inimigo do pernalonga");
perguntaUm = perguntaUm.toLowerCase();

if (perguntaUm === "patolino") {
    let acertouUm = document.getElementById("resultados-certos");
    acertouUm.innerHTML += "<p>PATOLINO, resposta correta!</p>";
} else {
    let errouUm = document.getElementById("resultados-errados");
    errouUm.innerHTML += "<p>Errado. O correto é PATOLINO.</p>";
}
let perguntaDois = prompt("nome da amiga do Chaves");
perguntaDois = perguntaDois.toLowerCase();

if (perguntaDois === "chiquinha") {
    let acertouDois = document.getElementById("resultados-certos");
    acertouDois.innerHTML += "<p>CHIQUINHA, resposta correta!</p>";
} else {
    let errouDois = document.getElementById("resultados-errados");
    errouDois.innerHTML += "<p>Errado. O correto é CHIQUINHA.</p>";
}

let perguntaTres = prompt("cor do cabelo da Ju");
perguntaTres = perguntaTres.toLowerCase();

if (perguntaTres === "azul") {
    let acertouTres = document.getElementById("resultados-certos");
    acertouTres.innerHTML += "<p>AZUL, resposta correta!</p>";
} else {
    let errouTres = document.getElementById("resultados-errados");
    errouTres.innerHTML += "<p>Errado. O correto é AZUL.</p>";
}

