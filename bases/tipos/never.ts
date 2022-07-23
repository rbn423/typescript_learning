(() => {

    const error = (message : string): never =>{
        throw new Error(message);
    }//las funciones de tipo never nunca deben acabar bien

    const error2 = (message : string): never | number =>{
        let pasa : boolean = Math.random() < 0.5;
        
        if(pasa){
            console.log("paso");
            return 12;
        }
        throw new Error(message);
    }

    error2("mensaje de error");
})()