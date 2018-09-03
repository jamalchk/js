function mostrarOla(){
    var nome = document.getElementById('nome').value;
    var resposta = document.getElementById('resposta');
    resposta.textContent = "Olá, " + nome;
}

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarOla);