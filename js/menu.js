// Selecionando o botão e o menu
const mobileBtn = document.getElementById('mobile_btn');
const mobileMenu = document.getElementById('mobile_menu');

// Adicionando um ouvinte de evento para o botão
mobileBtn.addEventListener('click', () => {
    // Toggling a classe "active" no menu móvel
    mobileMenu.classList.toggle('active');
});