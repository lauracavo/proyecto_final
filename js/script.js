const producto1 = document.getElementById("producto1");
const producto2 = document.getElementById("producto2");
const producto3 = document.getElementById("producto3");
const producto4 = document.getElementById("producto4");
const producto5 = document.getElementById("producto5");
const producto6 = document.getElementById("producto6");
const producto7 = document.getElementById("producto7");
const producto8 = document.getElementById("producto8");
const producto9 = document.getElementById("producto9");
const producto10 = document.getElementById("producto10");
const producto11 = document.getElementById("producto11");
const producto12 = document.getElementById("producto12");

/* const carrusel_1 = document.getElementsById("carrusel_1");
const carrusel_2 = document.getElementById("carrusel_2");
const carrusel_3 = document.getElementById("carrusel_3");
const carrusel_4 = document.getElementById("carrusel_4");
const carrusel_5 = document.getElementById("carrusel_5");
const carrusel_6 = document.getElementById("carrusel_6");
const carrusel_7 = document.getElementById("carrusel_7");
const carrusel_8 = document.getElementById("carrusel_8");
const carrusel_9 = document.getElementById("carrusel_9");
const carrusel_10 = document.getElementById("carrusel_10");
const carrusel_11 = document.getElementById("carrusel_11");
const carrusel_12 = document.getElementById("carrusel_12"); */

const producto = document.getElementById("producto");

const emergente_conteiner = document.getElementById("emergente_conteiner");

const cerrar = document.getElementById("cerrar");

producto1.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /* carrusel_1.classList.add("mostrarCarrusel"); */
});

producto2.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_2.classList.add("mostrarCarrusel"); */
});

producto3.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /* carrusel_3.classList.add("mostrarCarrusel"); */
});
producto4.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_4.classList.add("mostrarCarrusel"); */
});

producto5.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_5.classList.add("mostrarCarrusel"); */
});

producto6.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_6.classList.add("mostrarCarrusel"); */
});

producto7.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /* carrusel_7.classList.add("mostrarCarrusel"); */
});

producto8.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_8.classList.add("mostrarCarrusel"); */
});

producto9.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*   carrusel_9.classList.add("mostrarCarrusel"); */
});
producto10.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_10.classList.add("mostrarCarrusel"); */
});

producto11.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*   carrusel_11.classList.add("mostrarCarrusel"); */
});

producto12.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  /*  carrusel_12.classList.add("mostrarCarrusel"); */
});

cerrar.addEventListener("click", () => {
  emergente_conteiner.classList.remove("mostrar");
  /*   carrusel_1.classList.remove("mostrarCarrusel");
  carrusel_2.classList.remove("mostrarCarrusel");
  carrusel_3.classList.remove("mostrarCarrusel");
  carrusel_4.classList.remove("mostrarCarrusel");
  carrusel_5.classList.remove("mostrarCarrusel");
  carrusel_6.classList.remove("mostrarCarrusel");
  carrusel_7.classList.remove("mostrarCarrusel");
  carrusel_8.classList.remove("mostrarCarrusel");
  carrusel_9.classList.remove("mostrarCarrusel");
  carrusel_10.classList.remove("mostrarCarrusel");
  carrusel_11.classList.remove("mostrarCarrusel");
  carrusel_12.classList.remove("mostrarCarrusel"); */
});
