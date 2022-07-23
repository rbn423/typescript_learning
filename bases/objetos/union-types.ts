(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariable: string | number | Hero = "Fernando";
    console.log(typeof(myCustomVariable)); //log de que es un string

    myCustomVariable = 30;
    console.log(typeof(myCustomVariable)); //log de que es un number

    myCustomVariable = {
        name: "bruce",
        age: 22,
        powers: ["ninguno"]
    }
    console.log(typeof(myCustomVariable)); //asi el log dira que es un tipo objeto
})()