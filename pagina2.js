document.getElementById('loginForm').addEventListener('input', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var botao2 = document.getElementById('botao2');
  
    if (username.trim() !== '' && password.trim() !== '') {
        botao2.removeAttribute('disabled');
    } else {
        botao2.setAttribute('disabled', 'disabled');
    }
  });
  
  // Adicionando ação de redirecionamento ao botão
  document.getElementById('botao2').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username.trim() !== '' && password.trim() !== '') {
      window.location.href = 'paginga2.html'; // Substitua pelo link desejado
    }
  });
  