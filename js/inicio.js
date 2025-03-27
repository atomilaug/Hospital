// Simulación de credenciales para el login (esto es solo un ejemplo)
const validCredentials = {
    email: "paciente@hospital.com",  // Correo válido
    password: "12345"  // Contraseña válida
};

// Seleccionamos el formulario y los elementos de mensaje
const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

// Función para manejar el inicio de sesión
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores introducidos por el usuario
    const email = emailInput.value;
    const password = passwordInput.value;

    // Comprobamos las credenciales (esto es solo un ejemplo estático)
    if (email === validCredentials.email && password === validCredentials.password) {
        // Si las credenciales son correctas, redirigir al usuario (simulación)
        alert("Bienvenido al Hospital San Andres!");
        window.location.href = "/dashboard.html"; // Redirigir al panel de control (por ejemplo)
    } else {
        // Si las credenciales son incorrectas, mostrar el mensaje de error
        errorMessage.style.display = "block";
    }
});
