// script.js

// Função para expandir/recolher a descrição das imagens
const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;
    description.classList.toggle('show');
    button.textContent = description.classList.contains('show') ? '-' : '+';
  });
});

// Função para alternar a classe "active" no menu e rolagem suave para a seção correspondente
const menuItems = document.querySelectorAll('.menu-icon span');
const sections = document.querySelectorAll('section');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
    
    sections[index].scrollIntoView({ behavior: 'smooth' });
  });
});
