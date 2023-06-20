// Código Java para manipulação de eventos e outras funcionalidades do site

// Função para expandir/diminuir a descrição ao clicar no botão expand
const expandButtons = document.querySelectorAll(".expand-icon");

expandButtons.forEach(button => {
  button.addEventListener("click", () => {
    const description = button.nextElementSibling;
    description.classList.toggle("expanded");
  });
});
