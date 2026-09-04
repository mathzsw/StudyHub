const modal = document.getElementById('modalMateria');
const btnNovaMateria = document.getElementById('btnNovaMateria');
const fecharModal = document.getElementById('fecharModal');

const salvarMateria = document.getElementById('salvarMateria');
const nomeMateria = document.getElementById('nomeMateria');
const descricaoMateria = document.getElementById('descricaoMateria');

btnNovaMateria.addEventListener('click', () => {
    nomeMateria.value = '';
    descricaoMateria.value = '';
    delete salvarMateria.dataset.id;

    modal.style.display = 'flex';
});

fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

salvarMateria.addEventListener('click', async () => {
    const nome = nomeMateria.value.trim();
    const descricao = descricaoMateria.value.trim();

    if (!nome) {
        alert('Digite o nome da matéria.');
        return;
    }

    const id = salvarMateria.dataset.id;
    const url = id ? `/materias/${id}` : '/materias';
    const method = id ? 'PUT' : 'POST';

    try {
        const resposta = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                descricao
            })
        });

        if (!resposta.ok) {
            alert('Erro ao salvar matéria.');
            return;
        }

        window.location.reload();

    } catch (erro) {
        console.error(erro);
        alert('Erro ao enviar para o servidor.');
    }
});

document.querySelectorAll('.btn-excluir').forEach(botao => {
    botao.addEventListener('click', async () => {
        const id = botao.dataset.id;

        if (!confirm('Excluir esta matéria?')) return;

        await fetch(`/materias/${id}`, {
            method: 'DELETE'
        });

        window.location.reload();
    });
});

document.querySelectorAll('.btn-editar').forEach(botao => {
    botao.addEventListener('click', () => {
        nomeMateria.value = botao.dataset.nome;
        descricaoMateria.value = botao.dataset.descricao;

        salvarMateria.dataset.id = botao.dataset.id;

        modal.style.display = 'flex';
    });
});