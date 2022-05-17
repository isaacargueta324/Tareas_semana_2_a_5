class campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades)
    {
        this.Nombre=Nombre;
        this.Vida=Vida;
        this.Ataque=Ataque;
        this.Mana= Mana;
        //this.Tipo=Tipo;
        this.habilidades=habilidades;
        this.Counter1=null
        this.Counter2=null;
    }
    Presentarse(){
        console.log("Hola mi nombre es"+this.Nombre+"Y soy un campeon de loliño");
        console.log("Mis estadistics son Vida:"+this.Vida+" Ataque:"+this.Ataque+" Mana:"+this.Mana);
        console.log("Mis habilidades son");
        console.log(this.habilidades);
        if("Movilidad" in this)
        {
            console.log("Cuento con la propiedad movilidad");
        }
        if("Armadura" in this)
        {
            console.log("Cuento con la propiedad Armadura");
        }
        if("Distancia" in this)
        {
            console.log("Cuento con la propiedad Distancia");
        }
    }
    Comparar(Campeon2){
        if(this.Counter1==Campeon2.Tipo||this.Counter2==Campeon2.Tipo)
        {
            console.log("Match Favorable, facilito ez tutorial");
        }
        else
        {
            if(Campeon2.Counter1==this.Tipo||Campeon2.Counter2)
            {
                console.log("Match dificil, perdimos unu");

            }
            else{
                console.log("Una batalla igualada, La habilidad y suerte decidiran");
            }
        }
    }
};

class Tirador extends campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades){
        super(Nombre, Vida, Ataque, Mana, ...habilidades);
        this.Tipo="Tirador"
        this.Ataque*=1.24;
        this.Distancia=true;
        this.Counter1="Peleador"
        this.Counter2="Tanque"
    }
};
class Peleador extends campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades){
        super(Nombre, Vida, Ataque, Mana, ...habilidades);
        this.Tipo="Peleador"
        this.Ataque*=1.15;
        this.Vida*=1.15;
        this.Counter1="Asesino";
        this.Counter2="Tanque";
    }
};
class Mago extends campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades){
        super(Nombre, Vida, Ataque, Mana, ...habilidades);
        this.Tipo="Mago"
        this.Mana*=1.24;
        this.Distancia=true;
        this.Counter1="Peleador"
        this.Counter2="Tirador"
    }
};
class Asesino extends campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades){
        super(Nombre, Vida, Ataque, Mana, ...habilidades);
        this.Tipo="Asesino"
        this.Ataque*=1.30;
        this.Vida*=0.95;
        this.Movilidad=true;
        this.Counter1="Tirador"
        this.Counter2="Mago"
    }
};
class Tanque extends campeon_lol{
    constructor(Nombre, Vida, Ataque, Mana, ...habilidades){
        super(Nombre, Vida, Ataque, Mana, ...habilidades);
        this.Tipo="Tanque"
        this.Vida*=1.24;
        this.Armadura=true;
        this.Counter1="Mago";
        this.Counter2="Asesino";
    }
};
const Jax = new Peleador("Jax", 100, 100, 100, "Asalto implacable", "Salto brutal", "Potenciacion", "Contra ataque", "Poder del gran maestro");
const Yone = new Asesino("Yone", 100, 100, 100, "Camino del cazador", "Acero Morrtal", "Cuchilla espiritual", "Alma Desatada", "Destino Sellado");
const Ezreal = new Tirador("Ezreal", 100, 100, 100, "Fuerza de hechizo naciente", "Disparo Mistico", "Flujo de Esencia", "Alteracion Arcana", "Andanada Certera");
const Rell = new Tanque("Rell", 100, 100, 100, "Rompemoldes", "Golpe Demoledor", "Ferromancia-Caida", "Atraer y Repeler", "Tormenta Magnetica");
const  Veigar= new Mago("Veigar", 100, 100, 100, "Poder Maligno Fenomenal", "Ataque Maligno", "Materia Oscura", "Horizonte de sucesos","Estallido Primordial");