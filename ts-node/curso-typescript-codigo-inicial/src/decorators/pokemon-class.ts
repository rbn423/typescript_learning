function printToConsole( constructor: Function ){
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false): Function => { //factory decorator (devuelve una funcion)
    if (print)
        return printToConsole
    else
        return () => {}
}

const bloquearPrototipo = function( constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        //console.log({target,propertyKey,descriptor})
        //descriptor.value = () => console.log("hola mundo")
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800)
                return console.error("el id tiene que estar entre 1 y 800")
            else
                return originalMethod(id)
        }
    }
}

@bloquearPrototipo
@printToConsoleConditional( true )
export class Pokemon {

    public publicAPI: string = "https://pokeapi.co"

    constructor(
        public name: string
    ){}
    
    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`pokemon guardado en la base de datos ${id}`);
    }
}

/*@printToConsoleConditional( false )
export class Pokemon {

    public publicAPI: string = "https://pokeapi.co"

    constructor(
        public name: string
    ){}
}*/