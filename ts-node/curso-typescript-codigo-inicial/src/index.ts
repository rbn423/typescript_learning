import { Pokemon } from "./decorators/pokemon-class"

const charmander = new Pokemon("charmander");

//(Pokemon.prototype as any).customName = "pikachu" //esto va a fallar porque el decorador esta bloqueando la extesión del objeto

charmander.savePokemonToDB(5000)

console.log(charmander)