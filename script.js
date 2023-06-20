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

// Alternar exibição dos tópicos de conteúdo ao clicar nos três riscos
const menuIcon = document.querySelector(".menu-icon");
const topicsPopup = document.querySelector(".topics-popup");

function toggleTopicsPopup() {
  topicsPopup.classList.toggle("active");
}

menuIcon.addEventListener("click", toggleTopicsPopup);
