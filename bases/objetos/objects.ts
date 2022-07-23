(() => {
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = { //se puede definir el objeto con los tipos de las variables dentro de este
        name: "barry allen",
        age: 24,
        powers: ["supervelocidad", "viaje en el tiempo"]
    };

    /*flash = {
        name: "clark kent",
        age: 30,
        powers: ["supervelocidad", "superfuerza"],
        getName(){
            return this.name;
        }
    }*/
})()