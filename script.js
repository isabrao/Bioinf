document.addEventListener('DOMContentLoaded', function() {
  const expandButtons = document.querySelectorAll('.expand-button');

  expandButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const description = this.parentNode.querySelector('.description');
      if (window.getComputedStyle(description).display === 'none') {
        description.style.display = 'block';
        this.textContent = '-';
      } else {
        description.style.display = 'none';
        this.textContent = '+';
      }
    });
  });

  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('section');

  tabs.forEach(function(tab, index) {
    tab.addEventListener('click', function() {
      removeActiveClasses();
      tab.classList.add('active');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
      sections[index].style.display = 'block';
    });
  });

  function removeActiveClasses() {
    tabs.forEach(function(tab) {
      tab.classList.remove('active');
    });
  }
});
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('close');
  menuItems.classList.toggle('show');
});

