/*

//import { Hero as Superhero, Hero2 } from './classes/Hero'
import * as HeroClasses from './classes/Hero'
//import { powers } from './data/powers';
import powers, {Power} from './data/powers'; //esto es por la exportación por default

console.log('Hola Mundo!');

const Hero = 124;

//const ironman = new Superhero("tony stark", 12, 40);
const ironman = new HeroClasses.Hero("tony stark", 12, 40);

console.log(ironman);
console.log(powers);

*/

import { genericFunction, printObject } from "../generics/generics";
//import { Hero } from "./interfaces/hero";
//import { Villiain } from "./interfaces/villiain";
import { Villiain, Hero } from "../interfaces"; //esto se puede hacer porque he puesto los exports en el fichero index.ts dentro de la misma ubicación de las interfaces


//printObject(123) // un generico es una funcion que puede funcionar con cualquier tipo de dato
//printObject(new Date())
//printObject( {a:1, b:2, c:3})
//printObject([1,2,3,4,56,8,9])
//printObject("hola mundo")


//console.log(genericFunction(3.13456).toFixed(2))
//console.log(genericFunction("hola mundo").toFixed(2)) //esto falla porque es un string y no puede sacar los dos primeros decimales
//console.log(genericFunction("hola mundo").toUpperCase()) //al poner los genericos en el tipo de la funcion lo que hacemos es forzar durante la llamada de la funcion a que lo que retorne sea del tipo esperado

const deadpool = {
    name: "Deadpool",
    realName: "Wade",
    dangerLevel: 130
}

console.log(genericFunction<Hero>(deadpool).realName);