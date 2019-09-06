   //função anonima, significa que está atrelada a um evento.
   window.onload = function () {
    carrega_nome();
    //está associada ao evento onload.
    window.document.getElementById('um').onclick = function () {
        informacao();
    }
    //está associada ao evento onload.
    window.document.getElementById('dois').ondblclick = function () {
        informacao();
    }

}

function informacao() {
    var nome = window.prompt("Digite seu nome");
    var idade = window.prompt("Digite sua idade");
    window.alert(nome + idade);
}

function carrega_nome() {
    //Altera o valor do input nome.
    window.document.getElementById('nome').value = "Rosa";
}
