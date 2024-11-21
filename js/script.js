document.addEventListener("DOMContentLoaded", function() {
    let ok = document.querySelector(".botao_ok")
    ok.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o link de ser seguido
        let titulo = document.getElementById('titulo').value;
        let exercicio = document.getElementById('exercicio').value;

        if(titulo && exercicio) {
            // Salva os dados no localStorage
            let treinos = JSON.parse(localStorage.getItem('treinos')) || []; // Recupera ou cria um array de treinos
            treinos.push({titulo: titulo, exercicio: exercicio}); // Adiciona o novo treino
            localStorage.setItem('treinos', JSON.stringify(treinos)); // Salva no localStorage
        }
        window.location.href = 'pag_2.1.html'; // Redireciona para a página de treinos
    });
   
    let listatreinos = JSON.parse(localStorage.getItem('treinos')) || []; // Recupera os treinos do localStorage
    
    let treinos = document.getElementById('treinos');
    if (listatreinos.length > 0) {
        for (treino of listatreinos) {
            let treinoItem = document.createElement('a');
            treinoItem.classList.add('treino-item');
            treinoItem.innerHTML = treino.titulo;
            treinos.appendChild(treinoItem);
        };
    }
})