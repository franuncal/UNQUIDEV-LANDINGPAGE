// Menu Hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
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

// Formualario
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Formualario enviado");

    let form = event.target;
    let feedback = document.getElementById("formFeedback");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
            confirmButtonText: "Aceptar",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
            confirmButtonText: "Aceptar",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
          confirmButtonText: "Aceptar",
        });
      });
  });
