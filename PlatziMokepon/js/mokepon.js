let ataqueJuagador
let ataqueEnemigo
let resultadoAtaque

let spanVidasEnemigo
let spanVidasJugador


let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "none"
    let seccionReiniciarJuego = document.getElementById("reinicar-juego")
    seccionReiniciarJuego.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    let botonReiniciar = document.getElementById("boton-reinicar")
    botonReiniciar.addEventListener("click", reinicairJuego)

    spanVidasJugador = document.getElementById("vidas-jugador")
    spanVidasEnemigo = document.getElementById("vidas-enemigo")





    // Botones de ataques
    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById("boton-agua")
    let botonTierra = document.getElementById("boton-tierra")
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)

}


function seleccionarMascotaJugador(){
    let inputHipodogue = document.getElementById("hipodogue")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if (inputHipodogue.checked){
        spanMascotaJugador.innerHTML = "Hipodogue"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota")
        reinicairJuego()
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (enemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (enemigoAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    spanVidasJugador.innerHTML = vidasJugador
    spanVidasEnemigo.innerHTML = vidasEnemigo

    let seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionarAtaque.style.display = "block"
    let seccionSeleccionarMascota= document.getElementById("seleccionar-mascota")
    seccionSeleccionarMascota.style.display = "none"
}

function ataqueFuego() {
    ataqueAleatorioEnemigo()
    ataqueJuagador = "FUEGO"
    combate()
    console.log('Enemigo ataca con: ' + ataqueEnemigo)
}

function ataqueAgua() {
    ataqueAleatorioEnemigo()
    ataqueJuagador = "AGUA"
    combate()
    console.log('Enemigo ataca con: ' + ataqueEnemigo)
}

function ataqueTierra() {
    ataqueAleatorioEnemigo()
    ataqueJuagador = "TIERRA"
    combate()
    console.log('Enemigo ataca con: ' + ataqueEnemigo)
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA"
    }
}

function combate(){
    let mensageCombate
    if (ataqueJuagador == ataqueEnemigo) {
        mensageCombate = "Empatamos, dame otra oportunidad"
        resultadoAtaque = "Empate"
    } else if ((ataqueJuagador == "FUEGO" && ataqueEnemigo == "TIERRA")||(ataqueJuagador == "TIERRA" && ataqueEnemigo == "AGUA")||(ataqueJuagador == "AGUA" && ataqueEnemigo == "FUEGO")) {
        mensageCombate = "Felicitaciones me ganaste, dame la oportunidad de mejorar"
        resultadoAtaque = "🚀Ganaste"
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        mensageCombate = "jajaja Perdiste, no eres tan genial como creias"
        resultadoAtaque = "Perdiste 😐"
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }
    construirMensages(mensageCombate)
    revisarVidas()
}

function revisarVidas () {
    if (vidasEnemigo == 0 || vidasJugador == 0) {
        let mensageFinal
        if (vidasEnemigo == 0) {
            mensageFinal = "FELICITACIONES!! GANASTE 🚀🥳🛹"
        } else {
            mensageFinal = "LO SIENTO TE HE GANADO 😐, ¿QUIERES VOLVER A INTENTARLO?"
        }
        construirMensages(mensageFinal)
        let botonFuego = document.getElementById("boton-fuego")
        let botonAgua = document.getElementById("boton-agua")
        let botonTierra = document.getElementById("boton-tierra")
        let seccionReiniciarJuego = document.getElementById("reinicar-juego")
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true
        seccionReiniciarJuego.style.display = "block"
    }
}

function construirMensages(mensage) {
    let spanMensageAtaques = document.getElementById("mensage-ataque")
    mensageAtaque = "Tu mascota atacó con " + ataqueJuagador +", la mascota de tu enemigo atacó con " + ataqueEnemigo + " - " + resultadoAtaque
    spanMensageAtaques.innerHTML = mensageAtaque

    let seccionMensages = document.getElementById("mensages")
    // Crear un elemento de texto
    let parrafo = document.createElement("p");
    parrafo.innerHTML = mensage;

    // Agregar el elemento de texto al elemento padre
    seccionMensages.appendChild(parrafo);
}

function reinicairJuego () {
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor((Math.random()*(max-min+1))+min)
}

//Escucha cuando el HTML esté completamente cargado para ejecutar la funciòn que recibe como paràmetro.
window.addEventListener('load', iniciarJuego)