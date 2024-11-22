let exercicioCount = 1;

// Função para adicionar outro exercício
function adicionarExercicio() {
    exercicioCount++;

    const exerciciosContainer = document.getElementById('exercicios');

    const nomeExercicioLabel = document.createElement("label");
    nomeExercicioLabel.setAttribute("for", `exercicio-${exercicioCount}`);
    nomeExercicioLabel.classList.add("exercise_input", "DMsans-titulo");
    nomeExercicioLabel.textContent = "Nome do Exercício";

    const nomeExercicioInput = document.createElement("input");
    nomeExercicioInput.setAttribute("type", "text");
    nomeExercicioInput.setAttribute("id", `exercicio-${exercicioCount}`);
    nomeExercicioInput.setAttribute("name", "exercicio");
    nomeExercicioInput.setAttribute("placeholder", "Ex: Supino Inclinado");

    const setsLabel = document.createElement("label");
    setsLabel.setAttribute("for", `sets-${exercicioCount}`);
    setsLabel.classList.add("DMsans-titulo");
    setsLabel.textContent = "Número de Sets";

    const setsInput = document.createElement("input");
    setsInput.setAttribute("type", "number");
    setsInput.setAttribute("id", `sets-${exercicioCount}`);
    setsInput.setAttribute("name", "sets");
    setsInput.setAttribute("min", "1");
    setsInput.setAttribute("placeholder", "Número de Sets");

    const repeticoesLabel = document.createElement("label");
    repeticoesLabel.setAttribute("for", `repeticoes-${exercicioCount}`);
    repeticoesLabel.classList.add("DMsans-titulo");
    repeticoesLabel.textContent = "Repetições por Set";

    const repeticoesInput = document.createElement("input");
    repeticoesInput.setAttribute("type", "number");
    repeticoesInput.setAttribute("id", `repeticoes-${exercicioCount}`);
    repeticoesInput.setAttribute("name", "repeticoes");
    repeticoesInput.setAttribute("min", "1");
    repeticoesInput.setAttribute("placeholder", "Repetições por Set");

    exerciciosContainer.appendChild(nomeExercicioLabel);
    exerciciosContainer.appendChild(nomeExercicioInput);
    exerciciosContainer.appendChild(setsLabel);
    exerciciosContainer.appendChild(setsInput);
    exerciciosContainer.appendChild(repeticoesLabel);
    exerciciosContainer.appendChild(repeticoesInput);
}

// Função para salvar os treinos
function salvarTreino() {
    const titulo = document.getElementById("titulo").value;
    const exercicios = [];
    for (let i = 1; i <= exercicioCount; i++) {
        const nomeExercicio = document.getElementById(`exercicio-${i}`).value;
        const sets = document.getElementById(`sets-${i}`).value;
        const repeticoes = document.getElementById(`repeticoes-${i}`).value;

        if (nomeExercicio && sets && repeticoes) {
            exercicios.push({
                nome: nomeExercicio,
                sets: sets,
                repeticoes: repeticoes
            });
        }
    }
    const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
    treinos.push({titulo, exercicios});
    localStorage.setItem('treinos', JSON.stringify(treinos));

    // Redireciona para a página de exibição dos treinos
    window.location.href = "pag_2.2.html";
}

// Função para carregar os treinos ao carregar a página
window.onload = function() {
    const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
    const treinosContainer = document.getElementById("treinos");
    treinosContainer.innerHTML = ''; // Limpa o conteúdo anterior, se houver

    // Verifica se há treinos armazenados e os exibe
    if (treinos.length === 0) {
        treinosContainer.innerHTML = "<p class='DMsans-titulo'>Nenhum treino encontrado. Crie um novo treino para começar.</p>";
    } else {
        treinos.forEach(function(treino, index) {
            const treinoElement = document.createElement('div');
            treinoElement.classList.add('treino');
            treinoElement.innerHTML = `
                <h2 class="DMsans-titulo">Treino ${index + 1}: ${treino.titulo}</h2>
                <div class="exercicios">
                    ${treino.exercicios.map((exercicio, i) => `
                        <p class="DMsans-texto"><strong>Exercício ${i + 1}:</strong> ${exercicio.nome}</p>
                        <p class="DMsans-texto">Sets: ${exercicio.sets}, Repetições por Set: ${exercicio.repeticoes}</p>
                    `).join('')}
                </div>
                <hr>
            `;
            treinosContainer.appendChild(treinoElement);
        });
    }

    // Mostrar botão "Adicionar Novo Treino" se não houver treinos
    const adicionarTreinoButton = document.querySelector('a.botao_ok');
    if (treinos.length < 1) {
        adicionarTreinoButton.style.display = 'inline-block';
    } else {
        adicionarTreinoButton.style.display = 'none';
    }
};

// Função para adicionar um novo treino
function adicionarTreino() {
    const titulo = document.getElementById("titulo").value;
    const exercicios = [];
    
    const numeroExercicios = document.querySelectorAll('[id^="exercicio-"]').length;
    for (let i = 1; i <= numeroExercicios; i++) {
        const nomeExercicio = document.getElementById(`exercicio-${i}`).value;
        const sets = document.getElementById(`sets-${i}`).value;
        const repeticoes = document.getElementById(`repeticoes-${i}`).value;
        
        if (nomeExercicio && sets && repeticoes) {
            exercicios.push({
                nome: nomeExercicio,
                sets: sets,
                repeticoes: repeticoes
            });
        }
    }

    if (titulo && exercicios.length > 0) {
        const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
        treinos.push({ titulo, exercicios });
        localStorage.setItem('treinos', JSON.stringify(treinos));
        window.location.href = 'pag_2.2.html'; // Redireciona para a página de treinos
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
// Função para adicionar um novo exercício ao formulário
function adicionarExercicio() {
    // Pega o número de exercícios já adicionados
    const numeroExercicios = document.querySelectorAll('.exercicio').length + 1;
    
    // Cria um novo div para o exercício
    const novoExercicio = document.createElement('div');
    novoExercicio.classList.add('exercicio');
    novoExercicio.id = `exercicio-${numeroExercicios}`;
    
    // Cria o conteúdo do novo exercício
    novoExercicio.innerHTML = `
        <label for="nome-exercicio-${numeroExercicios}" class="exercise_input DMsans-titulo">Nome do Exercício</label>
        <input type="text" id="nome-exercicio-${numeroExercicios}" name="nome-exercicio" placeholder="Ex: Supino Inclinado"><br>

        <label for="sets-${numeroExercicios}" class="DMsans-titulo">Número de Sets</label>
        <input type="number" id="sets-${numeroExercicios}" name="sets" placeholder="Número de Sets" min="1"><br>

        <label for="repeticoes-${numeroExercicios}" class="DMsans-titulo">Repetições por Set</label>
        <input type="number" id="repeticoes-${numeroExercicios}" name="repeticoes" placeholder="Repetições por Set" min="1"><br>
    `;

    // Adiciona o novo exercício ao container de exercícios
    document.getElementById('exercicios').appendChild(novoExercicio);
}

// Função para adicionar o treino completo
function adicionarTreino() {
    const titulo = document.getElementById("titulo").value;
    const exercicios = [];
    
    const numeroExercicios = document.querySelectorAll('[id^="nome-exercicio-"]').length;
    for (let i = 1; i <= numeroExercicios; i++) {
        const nomeExercicio = document.getElementById(`nome-exercicio-${i}`).value;
        const sets = document.getElementById(`sets-${i}`).value;
        const repeticoes = document.getElementById(`repeticoes-${i}`).value;
        
        if (nomeExercicio && sets && repeticoes) {
            exercicios.push({
                nome: nomeExercicio,
                sets: sets,
                repeticoes: repeticoes
            });
        }
    }

    if (titulo && exercicios.length > 0) {
        const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
        treinos.push({ titulo, exercicios });
        localStorage.setItem('treinos', JSON.stringify(treinos));
        window.location.href = 'pag_2.2.html'; // Redireciona para a página de treinos
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
