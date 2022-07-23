(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let flash: Hero = {
        name: "barry allen",
        age: 24,
        powers: ["supervelocidad", "viaje en el tiempo"]
    };

    let superman: Hero = {
        name: "clark kent",
        age: 30,
        powers: ["supervelocidad", "superfuerza"],
        getName(){
            return this.name;
        }
    }
})()