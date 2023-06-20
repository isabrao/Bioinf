// Função para alternar a exibição da descrição ao clicar no botão de expansão
function expandDescription() {
  const expandButtons = document.querySelectorAll('.expand-button');
  
  expandButtons.forEach(button => {
    button.addEventListener('click', () => {
      const description = button.nextElementSibling;
      description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });
  });
}

// Função para rolar para a seção correspondente quando um item do menu é clicado
function scrollToSection() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = item.getAttribute('href');
      const section = document.querySelector(sectionId);
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

// Chamada das funções após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  expandDescription();
  scrollToSection();
});
