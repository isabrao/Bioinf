// Animação das seções ao rolar para baixo
const sections = document.querySelectorAll("section");
const windowHeight = window.innerHeight;

function animateSections() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight) {
      section.classList.add("animate-slide-up");
    }
  });
}

window.addEventListener("scroll", animateSections);

// Revelar conteúdo ao clicar no botão
const expandButtons = document.querySelectorAll(".expand-button");

function expandContent() {
  const imageCaption = this.parentNode;
  const expanded = imageCaption.classList.contains("expanded");
  
  if (expanded) {
    imageCaption.classList.remove("expanded");
  } else {
    imageCaption.classList.add("expanded");
  }
}

expandButtons.forEach((button) => {
  button.addEventListener("click", expandContent);
});

// Alternar exibição dos tópicos de conteúdo ao clicar nas linhas
const menuIcon = document.querySelector(".menu-icon");
const menuLines = menuIcon.querySelectorAll("span");

function toggleMenu() {
  menuLines.forEach((line) => {
    line.classList.toggle("active");
  });
}

menuIcon.addEventListener("click", toggleMenu);
