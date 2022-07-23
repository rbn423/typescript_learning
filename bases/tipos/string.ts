(() => {
    const batman: string = "batman"
    const linternaVerde: string = "linterna verde"
    const volcanNegro: string = "volcan negro"

    console.log(`I'm ${ batman }`);

    console.log(batman[10]?.toUpperCase() || "No existe el caracter") //si la variable tiene algo en esa posición hace el toUpperCase
})()