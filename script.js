// Selecione todos os botões de expansão
const expandButtons = document.querySelectorAll('.expand-button');

// Itere sobre cada botão
expandButtons.forEach(button => {
  // Adicione um ouvinte de evento de clique
  button.addEventListener('click', () => {
    // Encontre o elemento pai (image-caption) do botão atual
    const imageCaption = button.parentNode;
    // Encontre o elemento de descrição dentro do image-caption
    const description = imageCaption.querySelector('.description-text');

    // Verifique se a descrição está visível ou oculta
    if (description.style.display === 'none') {
      // Se est
