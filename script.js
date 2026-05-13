/* ============================
   MENÚ HAMBURGUESA (Responsive)
   ============================ */

const nav = document.querySelector("nav");
const menuBtn = document.createElement("button");
menuBtn.textContent = "☰";
menuBtn.classList.add("menu-btn");
document.body.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});


/* ============================
   ANIMACIÓN AL HACER SCROLL
   (Fade-in de tarjetas y secciones)
   ============================ */

const elementosAnimados = document.querySelectorAll(".tarjeta-pais, section, article");

function animarScroll() {
  elementosAnimados.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (posicion < alturaPantalla - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animarScroll);
animarScroll(); // Para cargar animaciones iniciales


/* ============================
   BOTÓN "VOLVER ARRIBA"
   ============================ */

const btnArriba = document.createElement("button");
btnArriba.textContent = "↑";
btnArriba.classList.add("btn-arriba");
document.body.appendChild(btnArriba);

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    btnArriba.classList.add("mostrar");
  } else {
    btnArriba.classList.remove("mostrar");
  }
});


/* ============================
   VALIDACIÓN DEL FORMULARIO
   ============================ */

const form = document.querySelector(".form-viaje");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const personas = document.querySelector("#personas");

    let errores = [];

    if (nombre.value.trim().length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      errores.push("El email no es válido.");
    }

    if (telefono.value && !/^[0-9]{9}$/.test(telefono.value)) {
      errores.push("El teléfono debe tener 9 números.");
    }

    if (personas.value < 1 || personas.value > 10) {
      errores.push("El número de personas debe estar entre 1 y 10.");
    }

    if (errores.length > 0) {
      alert("Errores:\n\n" + errores.join("\n"));
    } else {
      alert("Formulario enviado correctamente. ¡Buen viaje!");
      form.reset();
    }
  });
}


/* ============================
   EFECTO HOVER EN TARJETAS
   (Pequeño zoom suave)
   ============================ */

const tarjetas = document.querySelectorAll(".tarjeta-pais");

tarjetas.forEach(t => {
  t.addEventListener("mouseenter", () => {
    t.style.transform = "scale(1.02)";
    t.style.transition = "0.3s";
  });

  t.addEventListener("mouseleave", () => {
    t.style.transform = "scale(1)";
  });
});
