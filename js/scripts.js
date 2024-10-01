// Menu Hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const abrirMenu = document.getElementById("abrir");
  const cerrarMenu = document.getElementById("cerrar");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-list li a");

  // Función para abrir el menú
  abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible");
  });

  // Función para cerrar el menú
  cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
  });

  // Cerrar el menú cuando se haga clic en cualquier enlace del menú
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  });
});

// Scroll
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
    { threshold: 1.0 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
