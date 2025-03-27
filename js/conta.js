// Función para guardar los usuarios en localStorage
function saveUserData(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Función para verificar si el usuario existe y si la contraseña es correcta
function validateLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    return user !== undefined;
}

// Registro de usuario
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Guardar el nuevo usuario
    saveUserData(email, password);

    alert('Usuario registrado con éxito');
    document.getElementById('register-form').reset();
});

// Inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Validar usuario
    if (validateLogin(email, password)) {
        alert('Inicio de sesión exitoso');
        // Redirigir o cambiar vista si es necesario
    } else {
        alert('Correo o contraseña incorrectos');
    }

    document.getElementById('login-form').reset();
});

// Formulario de contacto (solo muestra mensaje por ahora)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Mensaje enviado de ${name} (${email}): ${message}`);
    document.getElementById('contact-form').reset();
});