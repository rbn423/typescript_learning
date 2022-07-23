(() => {
    const hero: string = "flash";

    function returnName(): string{
        return hero;
    }//funcion clasica basica

    const activarSeñal = ():string => {
        return "activada";
    }//funcion de flecha
})() //función anónima autoinvocada