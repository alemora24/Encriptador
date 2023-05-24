function encriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("dibujo");

    var textocifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "over")
                            .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent ="¡Texto encriptado con Éxito!";
        parrafo.textContent ="";
        muneco.src = "./imagenes/confidential.jpg";
    } else {
        muneco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent ="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        alert("Debes ingresar un texto");

    }
}

function desencriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("dibujo");

    var textocifrado = texto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/over/gi, "o")
                            .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textocifrado;
        tituloMensaje.textContent ="¡Texto desencriptado con Éxito!";
        parrafo.textContent ="";
        muneco.src = "./imagenes/padlock.gif";
    } else {
        muneco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent ="Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar.";
        alert("Debes ingresar un texto");
    }
}