class personaje{
    constructor(tipo,vida,danio,){
        this.tipo = tipo
        this.vida = vida
        this.danio = danio
    }
}

const caballero = new personaje("caballero",150,30)
const mago = new personaje("mago",100,15)
const arquero = new personaje("arquero",120,20)

let numero = 1

let atacante
let objetivo
let cantidad

console.log("elegi a tu personaje y pelea!:")
console.log("Caballero (vida = 150, daño = 30)")
console.log("Mago (vida = 100, daño = 15)")
console.log("Arquero (vida = 120, daño = 20)")

function atacar(atacante,objetivo,cantidad){
    
    for (let veces = 0; veces < cantidad; veces++) {
        objetivo.vida = objetivo.vida - atacante.danio
    }
    if (objetivo.vida <= 0){
        console.log("Has atacado!")
        console.log("el oponente",objetivo.tipo, "ha muerto!")
    }else{
        console.log("Has atacado!")
        console.log("el objetivo",objetivo.tipo,"ha recibido",atacante.danio*cantidad,"puntos de daño y ha quedado a",objetivo.vida,"puntos de vida!")
    }
}

do {
    atacante = eval(prompt("Personaje:"))
    objetivo = eval(prompt("Objetivo (mago,arquero o caballero)"))
    cantidad = parseInt(prompt("cantidad de ataques:"))
    atacar(atacante,objetivo,cantidad)
} while (numero = 1);









