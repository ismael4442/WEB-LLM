function escribir(valor) {
    const pantalla = document.getElementById("pantalla");

    if (valor === "=") {
        try {
            // Acepta solo números y operaciones matemáticas básicas.
            if (!/^[0-9+\-*/.() ]+$/.test(pantalla.value)) {
                pantalla.value = "Error";
                return;
            }

            const resultado = Function(
                '"use strict"; return (' + pantalla.value + ')'
            )();

            pantalla.value = Number.isFinite(resultado)
                ? String(resultado)
                : "Error";
        } catch {
            pantalla.value = "Error";
        }

        return;
    }

    if (pantalla.value === "0" || pantalla.value === "Error") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function borrar() {
    document.getElementById("pantalla").value = "0";
}