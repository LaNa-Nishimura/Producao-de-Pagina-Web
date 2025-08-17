document.addEventListener('DOMContentLoaded', function() {

    // Saudação ao abrir a página
    alert("Olá! Seja bem-vindo(a) para ver meu currículo!");

    // Mostrar e esconder seção de comentário
    const botao = document.getElementById('botaoComentario');
    const secaoContato = document.querySelector('.comentario');

    botao.addEventListener('click', function() {
        if (secaoContato.style.display === 'none' || secaoContato.style.display === '') {
            secaoContato.style.display = 'block';
            botao.textContent = 'Sair';
        } else {
            secaoContato.style.display = 'none';
            botao.textContent = 'Deseja deixar um comentário?';
        }
    });

    // Resposta quando o usuário deixa um comentário
    const form = document.querySelector('.comentario form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Obrigado pelo seu comentário!");
        form.reset();
    });

});