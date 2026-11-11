let ganadas = 0;
let perdidas = 0;
let empatadas = 0;
let partidas = 0;

function juego(jugador) {
  const opciones = ["piedra", "papel", "tijera"];
  const maquina = opciones[Math.floor(Math.random() * opciones.length)];

  let mensaje;

  partidas++;

  if (jugador === maquina) {
    mensaje = "¡Empate!";
    empatadas++;
  }

  // Operador lógico AND (&&) y OR (||)
  else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "tijera" && maquina === "papel") ||
    (jugador === "papel" && maquina === "piedra")
  ) {
    mensaje = "¡Gana el jugador!";
    ganadas++;
  } else {
    mensaje = "¡Gana la máquina!";
    perdidas++;
  }

  // Actualizar marcador
  document.getElementById("marcador").textContent =
    "Partidas jugadas: " + partidas;

  document.getElementById("ganadas").textContent = "Ganadas: " + ganadas;

  document.getElementById("empatadas").textContent = "Empates: " + empatadas;

  document.getElementById("perdidas").textContent = "Derrotas: " + perdidas;

  // Mostrar las jugadas
  document.getElementById("jugada-jugador").textContent =
    "Tu jugada: " + jugador.toUpperCase();

  document.getElementById("jugada-maquina").textContent =
    "Jugada de la máquina: " + maquina.toUpperCase();

  // Mostrar el resultado
  document.getElementById("mensaje").textContent = mensaje;
}
