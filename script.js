<script>
  // Obtém todas as abas
  const tabs = document.querySelectorAll('.tab');

  // Obtém todas as seções correspondentes às abas
  const sections = document.querySelectorAll('section');

  // Adiciona o evento de clique a cada aba
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove a classe "active" de todas as abas
      tabs.forEach(tab => tab.classList.remove('active'));

      // Remove a classe "active" de todas as seções
      sections.forEach(section => section.classList.remove('active'));

      // Adiciona a classe "active" à aba clicada
      tab.classList.add('active');

      // Adiciona a classe "active" à seção correspondente
      sections[index].classList.add('active');
    });
  });

  // Obtém todos os botões de expansão
  const expandButtons = document.querySelectorAll('.expand-button');

  // Adiciona o evento de clique a cada botão de expansão
  expandButtons.forEach(button => {
    button.addEventListener('click', function() {
      const description = this.parentNode.querySelector('.description');
      if (description.style.display === 'none') {
        description.style.display = 'block';
        this.textContent = '-';
      } else {
        description.style.display = 'none';
        this.textContent = '+';
      }
    });
  });
</script>
