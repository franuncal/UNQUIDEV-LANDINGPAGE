const abrirBtn = document.getElementById("abrir");
const cerrarBtn = document.getElementById("cerrar");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-list a"); // Selecciona todos los enlaces del menú

abrirBtn.addEventListener("click", () => {
  nav.classList.toggle("active"); // Alterna la clase active al abrir
});

// Cerrar el menú al hacer clic en el botón de cerrar
cerrarBtn.addEventListener("click", () => {
  nav.classList.remove("active"); // Oculta el menú al cerrar
});

// Cerrar el menú al hacer clic en cualquier enlace
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active"); // Oculta el menú al seleccionar un enlace
  });
});

// Scroll Animado
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
