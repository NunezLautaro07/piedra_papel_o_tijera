const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const resultado = document.querySelector(".resultado");
const resultado2 = document.querySelector(".resultado2");

function COMPUTER() {
  const numero = Math.floor(Math.random() * 3) + 1;
  let respuesta;
  if (numero == 1) {
    respuesta = "./Captura de pantalla 2024-06-24 184803.png"; // piedra
  } else if (numero == 2) {
    respuesta = "./Captura de pantalla 2024-06-24 185039.png"; // papel
  } else {
    respuesta = "./Captura de pantalla 2024-06-24 185327.png"; // tijera
  }
  return respuesta;
}

resultado.innerHTML = "";
resultado2.innerHTML = "";

piedra.addEventListener("click", () => {
  const ejecucion = COMPUTER();
  resultado.innerHTML = `<img src="${ejecucion}" /> <br/>`;
  if (ejecucion == "./Captura de pantalla 2024-06-24 184803.png") {
    resultado2.innerHTML = '<p class="text-center">Empate</p>';
  } else if (ejecucion == "./Captura de pantalla 2024-06-24 185039.png") {
    resultado2.innerHTML = '<p class="text-center">Perdiste</p>';
  } else {
    resultado2.innerHTML = '<p class="text-center">Ganaste</p>';
  }
});

papel.addEventListener("click", () => {
  const ejecucion = COMPUTER();
  resultado.innerHTML = `<img src="${ejecucion}" /> <br/>`;
  if (ejecucion == "./Captura de pantalla 2024-06-24 184803.png") {
    resultado2.innerHTML = '<p class="text-center">Ganaste</p>';
  } else if (ejecucion == "./Captura de pantalla 2024-06-24 185039.png") {
    resultado2.innerHTML = '<p class="text-center">Empate</p>';
  } else {
    resultado2.innerHTML = '<p class="text-center">Perdiste</p>';
  }
});

tijera.addEventListener("click", () => {
  const ejecucion = COMPUTER();
  resultado.innerHTML = `<img src="${ejecucion}" /> <br/>`;
  if (ejecucion == "./Captura de pantalla 2024-06-24 184803.png") {
    resultado2.innerHTML = '<p class="text-center">Perdiste</p>';
  } else if (ejecucion == "./Captura de pantalla 2024-06-24 185039.png") {
    resultado2.innerHTML = '<p class="text-center">Ganaste</p>';
  } else {
    resultado2.innerHTML = '<p class="text-center">Empate</p>';
  }
});
