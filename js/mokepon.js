
let ataqueJugador
let ataqueEnemigo

function inciarJugo(){
    let btnMascotaJugador = document.getElementById("boton-mascota")
    btnMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    
    let btnAtaqueFuego = document.getElementById("boton-fuego")
    btnAtaqueFuego.addEventListener("click", atacarConFuego)
    let btnAtaqueAgua = document.getElementById("boton-agua")
    btnAtaqueAgua.addEventListener("click", atacarConAgua)
    let btnAtaqueTierra = document.getElementById("boton-tierra")
    btnAtaqueTierra.addEventListener("click", atacarConTierra)
    //TODO Se puede crear una única función de seleccionarAtaque, que reciva como parámetro el ataque.  

}

function seleccionarMascotaJugador(){
    let hipodogue = document.getElementById("hipodogue")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    if (hipodogue.checked){
        spanMascotaJugador.innerHTML = "Hipodogue"
    } else if (capipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (ratigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if( mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = "Hipodogue"  
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function atacarConFuego(){
    ataqueJugador = "FUEGO"
    console.log(ataqueJugador)
    alert("Te han quemado")
    ataqueAleatorioEnemigo()

}

function atacarConAgua(){
    ataqueJugador = "AGUA"
    alert("te bañó y te dejó sin nada")
    console.log(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function atacarConTierra(){
    ataqueJugador = "TIERRA"
    alert("Te dejó sin aire y te asficció en tierra")
    console.log(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
        console.log("Enemigo "+ataqueEnemigo)
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
        console.log("Enemigo "+ataqueEnemigo)

    } else {
        ataqueEnemigo = "TIERRA"
        console.log("Enemigo "+ataqueEnemigo)
    }
}


function aleatorio(min, max){
    return Math.floor((Math.random()*(max-min+1))+min)
}

window.addEventListener("load", inciarJugo)