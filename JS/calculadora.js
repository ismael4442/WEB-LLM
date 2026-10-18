alert("viva vox");


function escribir(valor){
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = valor;
    }

    else {
        pantalla.value += valor;
    }

}
