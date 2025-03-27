// Seleccionar los elementos necesarios
const form = document.getElementById('register-form');
const usersTableBody = document.querySelector('#users-table tbody');

// Función para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe y recargue la página

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('reg-nombre').value;
    const documento = document.getElementById('reg-Documento').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    // Crear una nueva fila para la tabla
    const newRow = document.createElement('tr');

    // Crear las celdas para cada valor
    const nameCell = document.createElement('td');
    nameCell.textContent = nombre;
    const docCell = document.createElement('td');
    docCell.textContent = documento;
    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    const passwordCell = document.createElement('td');
    passwordCell.textContent = password; // Puedes hacer que la contraseña no se muestre en texto plano si lo prefieres

    // Agregar las celdas a la fila
    newRow.appendChild(nameCell);
    newRow.appendChild(docCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(passwordCell);

    // Agregar la fila a la tabla
    usersTableBody.appendChild(newRow);

    // Limpiar el formulario después de agregar el usuario
    form.reset();
});
