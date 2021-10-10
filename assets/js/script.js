
cantidadJuegos = parseInt(prompt("¿Cuantas veces desea jugar Cachipún?"))

i = 1

while(i <= cantidadJuegos){

    var jugador = prompt(`
    Elija una opcion :
    piedra
    papel
    tijera`)

    var computadora = Math.floor(Math.random()*3)

    // piedra = 0
    // papel = 1
    // tijera = 2

    if (jugador == "piedra" && computadora == 2 || jugador == "papel" && computadora == 0 || jugador == "tijera" && computadora == 1){
        if (computadora == 0){
            computadora = "piedra"
        }
        else if(computadora == 1){
            computadora = "papel"
        }
        else{
            computadora = "tijera"
        }
             console.log("Juego nº" + i + "=  GANASTE! : tu elegiste " + jugador + " y la maquina " + computadora )

    }else if(jugador == "piedra" && computadora == 1 || jugador == "papel" && computadora == 2 || jugador == "tijera" && computadora == 0){
        if (computadora == 0){
            computadora = "piedra"
        }
        else if(computadora == 1){
            computadora = "papel"
        }
        else{
            computadora = "tijera"
        }
            console.log("Juego nº" + i + "=  PERDISTE! : la maquina eligio " + computadora + " y tu " + jugador )

    }else {
        if (computadora == 0){
            computadora = "piedra"
        }
        else if(computadora == 1){
            computadora = "papel"
        }
        else{
            computadora = "tijera"
        }
            console.log("Juego nº" + i + "= EMPATE ! : la maquina eligio " + computadora + " y tu " + jugador)
        }
    i = i+1
}
