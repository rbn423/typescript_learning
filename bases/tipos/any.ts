(() => {
    let avenger: any = 123;
    let exists;
    let power;
    
    avenger = "Dr Strange";
    console.log((avenger as string).charAt(1)); //con el as string trata el valor como un string

    avenger = 12.12345;
    console.log(<number>avenger.toFixed(2));//ahora le decimos que lo trate como un numero

    console.log(exists);
    console.log(power);
})()