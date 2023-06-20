// Adicionar evento de clique aos botões de expansão
var expandButtons = document.querySelectorAll('.expand-button');
expandButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var caption = this.parentNode;
    caption.classList.toggle('show');
  });
});

// Adicionar evento de clique ao ícone do menu
var menuIcon = document.querySelector('.menu-icon');
var header = document.querySelector('header');
menuIcon.addEventListener('click', function() {
  this.classList.toggle('close');
  header.classList.toggle('menu-open');
});
