let usuarios = [];

const botaoCadastrar = document.getElementById('bt');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const listaUsuarios = document.getElementById('listaUsuarios');
const aviso = document.getElementById('aviso');

botaoCadastrar.onclick = function () {
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    if (nome === '' || email === '') {
        mostrarAviso("Por favor, preencha todos os campos.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        mostrarAviso("Por favor, insira um e-mail válido.");
        campoEmail.focus();
        return;
    }

    usuarios.push({ nome, email });

    atualizarLista();
    limparCampos();
    ocultarAviso();
};

function atualizarLista() {
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. ${usuario.nome} - ${usuario.email}`;
        listaUsuarios.appendChild(item);
    });
}

function limparCampos() {
    campoNome.value = '';
    campoEmail.value = '';
    campoNome.focus();
}

function mostrarAviso(mensagem) {
    aviso.textContent = mensagem;
    aviso.style.display = 'block';
}

function ocultarAviso() {
    aviso.style.display = 'none';
}
