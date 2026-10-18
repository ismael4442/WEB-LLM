
function juego(jugador, maquina) {
    if (jugador == maquina) {
        console.log("¡Empate!");
    }
    else if (
        jugador == "piedra" && maquina == "tijera" ||
        jugador == "tijera" && maquina == "papel" ||
        jugador == "papel" && maquina == "piedra"
    ) {
        console.log("¡Gana el jugador!");
    }
    else {
        console.log("¡Gana la máquina!");
    }
}


let jugador1 = "piedra"; let maquina1 = "piedra";
juego(jugador1, maquina1);

let jugador2 = "papel"; let maquina2 = "tijera";
juego(jugador2, maquina2);

juego("piedra", "tijera");