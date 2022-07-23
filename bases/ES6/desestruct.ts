(() => {

    const avengers = {
        nick: "Samuel l. jackson",
        ironMan: "robert downey",
        vision: "paul bettany",
        activo: true,
        poder: 1500
    }

    //const {poder, vision} = avengers // aqui inferimos los tipos del objeto Avengers y ahora se pueden utilizar fuera del objeto
    //console.log(poder.toString(), vision.toUpperCase());

    const printAvenger = (avengers: {
        nick: string,
        ironMan: string,
        vision: string,
        activo: boolean,
        poder: number
    }) => { //si no inferimos los tipos, hay que declarar el objeto avengers entero
        console.log(avengers.vision);
    }

    printAvenger(avengers);

    const printAvenger2 = ( {ironMan, ...resto} = avengers) => { 
        console.log(ironMan, resto.activo);
    }

    const avengersArr: string[] = ["capi", "ironman", "hulk"];
    const [,ironman,hulki] = avengersArr;

    console.log({hulki});

})()