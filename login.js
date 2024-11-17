// Manejar el formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío predeterminado

    // Obtener valores del formulario
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    // Validación básica
    if (!email || !username || !password || !role) {
        document.getElementById('error-message').textContent = "Por favor, complete todos los campos.";
        return;
    }

    // Redirigir a la página principal
    window.location.href = "pagina_principal.html";
});

// Mostrar/ocultar contraseña
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
