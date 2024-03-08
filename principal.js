// Usuário e senha predefinidos
const usuarioPadrao = 'Gabriel';
const senhaPadrao = '131723';

function login() {
  // Obtém os valores inseridos pelo usuário
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verifica se o usuário e senha correspondem aos predefinidos
  if (username === usuarioPadrao && password === senhaPadrao) {
   
    // Redireciona para a página de perfil, por exemplo
    window.location.href = 'pagina2.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
}