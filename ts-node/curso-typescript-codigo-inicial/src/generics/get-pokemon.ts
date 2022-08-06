import axios from "axios";
import { Pokemon } from "../interfaces";


export const getPokemon = async(pokemonID: number): Promise<Pokemon> => {
    //console.log("hola mundo")
    // if(true) throw new Error("auxilio!")

    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonID }`)
    //console.log(resp.data.abilities[0])
    return resp.data;
}