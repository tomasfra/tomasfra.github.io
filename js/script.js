<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const formTreino = document.getElementById('form-treino');
    const adicionarExercicioBtn = document.getElementById('adicionar-exercicio');
    const exerciciosContainer = document.getElementById('exercicios-container');
    const tituloTreinoInput = document.getElementById('titulo-treino');
    
    // Adicionar um novo exercício ao formulário
    adicionarExercicioBtn.addEventListener('click', function() {
        const novoExercicioDiv = document.createElement('div');
        novoExercicioDiv.classList.add('exercicio');
        
        const nomeExercicioInput = document.createElement('input');
        nomeExercicioInput.type = 'text';
        nomeExercicioInput.placeholder = 'Ex: Supino Reto';
        
        const setsExercicioInput = document.createElement('input');
        setsExercicioInput.type = 'number';
        setsExercicioInput.placeholder = 'Ex: 4';
        
        const repeticoesExercicioInput = document.createElement('input');
        repeticoesExercicioInput.type = 'number';
        repeticoesExercicioInput.placeholder = 'Ex: 10';

        novoExercicioDiv.appendChild(nomeExercicioInput);
        novoExercicioDiv.appendChild(setsExercicioInput);
        novoExercicioDiv.appendChild(repeticoesExercicioInput);
        exerciciosContainer.appendChild(novoExercicioDiv);
    });

    // Salvar o treino e os exercícios no localStorage
    formTreino.addEventListener('submit', function(event) {
        event.preventDefault();

        const titulo = tituloTreinoInput.value;
        const exercicios = [];

        const exerciciosDivs = exerciciosContainer.querySelectorAll('.exercicio');
        exerciciosDivs.forEach(function(exercicioDiv) {
            const nomeExercicio = exercicioDiv.querySelector('input[type="text"]').value;
            const sets = exercicioDiv.querySelector('input[type="number"]:nth-child(2)').value;
            const repeticoes = exercicioDiv.querySelector('input[type="number"]:nth-child(3)').value;

            if (nomeExercicio && sets && repeticoes) {
                exercicios.push({ nome: nomeExercicio, sets: sets, repeticoes: repeticoes });
            }
        });

        if (titulo && exercicios.length > 0) {
            const treino = { titulo: titulo, exercicios: exercicios };
            let treinosSalvos = JSON.parse(localStorage.getItem('treinos')) || [];
            treinosSalvos.push(treino);
            localStorage.setItem('treinos', JSON.stringify(treinosSalvos));

            alert('Treino salvo com sucesso!');
            formTreino.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});
=======
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
>>>>>>> 93e078114fb77bfad3d132788e97d2acb61721c4
