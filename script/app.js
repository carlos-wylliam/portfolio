const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Adiciona ouvintes de evento para cada item do menu
navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Pega o índice do item clicado
    const index = Array.from(navItems).indexOf(event.target);

    // Direciona o usuário para a seção correspondente
    const sections = document.querySelectorAll("section");
    sections[index].scrollIntoView({ behavior: "smooth" });

    // Fecha o menu
    nav.classList.remove("active");
  });
});
