document.addEventListener('DOMContentLoaded', function() {
  const expandButtons = document.querySelectorAll('.expand-button');

  expandButtons.forEach(function(button) {
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
});
