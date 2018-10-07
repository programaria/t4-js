let btnAdicionar = document.getElementById("adicionar-aluna");

btnAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let notaUm = document.getElementById("notaum").value;
  let notaDois = document.getElementById("notadois").value;
  let notaTres = document.getElementById("notatres").value;
  let form = document.getElementById("formulario");

  form.reset();

  let insereNome = document.getElementById("insere-nome");
  insereNome.innerHTML = nome;2

  let calculoMedia = (parseInt(notaUm) + parseInt(notaDois) + parseInt(notaTres)) / 3;
  let insereMedia = document.getElementById("insere-media");
  insereMedia.innerHTML = calculoMedia;
})