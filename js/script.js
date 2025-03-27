// Obtener los elementos del DOM
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menuLateral = document.getElementById('menu-lateral');
const content = document.querySelector('.content');

// Abrir el menú lateral
openBtn.addEventListener('click', () => {
    menuLateral.classList.add('open');
    content.classList.add('shift');
});

// Cerrar el menú lateral
closeBtn.addEventListener('click', () => {
    menuLateral.classList.remove('open');
    content.classList.remove('shift');
});