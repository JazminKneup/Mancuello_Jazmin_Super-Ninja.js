class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 75;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ha bebido sake y ahora tiene una salud de ${this.salud}`);
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// Acá creamos una instancia de la clase de Super Sensei
const superSensei = new Sensei("Jazmin");
console.log(superSensei);

superSensei.speakWisdom();
superSensei.showStats();
