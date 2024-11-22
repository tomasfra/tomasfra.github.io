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
