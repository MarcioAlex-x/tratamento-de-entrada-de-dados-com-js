document.addEventListener('DOMContentLoaded', () => {
    // Criei o array de alunos
    let alunos = []

    // Criei a variável de entrada da busca
    const input = document.querySelector('input')

    // Os resultados entram aqui
    const resultado = document.querySelector('.resultado')

    // Esta é a função de adicionar o aluno
    const addAluno = () => {
        const nome = prompt('Informe o nome do aluno!')
        if (nome) {
            // Adiciono o aluno no array, se tiver espaço o trim retira
            alunos.push(nome.trim())
            alert(`Aluno "${nome}" adicionado com sucesso!`)
        }
    }

    // Esta é a função de ler o array
    const lerAlunos = () => {
        // Se não tiver nada no array mando uma mensagem para a div resultado
        if (alunos.length === 0) {
            resultado.innerHTML = '<p>Nenhum aluno cadastrado.</p>'
        } else {
            // Mando uma lista HTMl para a div resultado
            resultado.innerHTML = `
                <h3>Lista de Alunos:</h3>
                <ul>
                    ${alunos.map(aluno => `<li>${aluno}</li>`).join('')}
                </ul>
            `
        }
    }

    // Criei a função de busca
    const buscar = () => {
        // Busco usando o valor digitado no input, retirando os espaços
        const nomeBuscado = input.value.trim()
        // Se não tiver conteudo mando uma mensagem na div resposta
        if (!nomeBuscado) {
            resultado.innerHTML = '<p>Digite um nome para buscar.</p>'
            // Paro a aplicação
            return
        }
        // Se tiver incluso o valor do input no array mando o resultado na div
        if (alunos.includes(nomeBuscado)) {
            resultado.innerHTML = `<p>Aluno encontrado: <strong>${nomeBuscado}</strong></p>`
        } else {
            resultado.innerHTML = '<p>Aluno não encontrado.</p>'
        }
    }

    // Chamo todos os meus eventos após as funções
    document.querySelectorAll('button')[0].addEventListener('click', buscar)
    document.querySelectorAll('button')[1].addEventListener('click', addAluno)
    document.querySelectorAll('button')[2].addEventListener('click', lerAlunos)
})
