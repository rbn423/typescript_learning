export const printObject = (argument: any) => {
    console.log(argument)
}


export function genericFunction<T>(argument: T): T{ //poniendo <T> indicamos que es de tipo generico
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument; //asi se define un generico en una funcion de flecha