export class Aviao {
    constructor(id, marca, tipo = "aviao"){
        this.tipo = tipo;
        this.id = id;
        this.marca = marca;
    }
    identify(dia){
        return `Id : ${this.id} no dia ${dia}`;
    }
}
export class Jato extends Aviao{
    constructor(id, marca, tipo){
        super(id, marca, "jato");
    }
    luta(){
        return ` O jato ${this.id} está em combate`;
    }
    identify(dia){
        return `O id do jato é ` + super.identify(dia);
    }
}
