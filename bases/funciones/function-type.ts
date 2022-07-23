(() => {

    const addNumbers = (a: number, b: number) => a+b;
    const greet = (name: string) => `hola ${name}`;
    const saveTheWorld = () => "el mundo esta a salvo";

    //let myFuntion;
    //let myFuntion: Function;
    //let myFuntion: (n:string) => string;
    //let myFuntion : (y:number,z:number) => number;
    let myFuntion: () => string;


    //myFuntion = 10;

    //myFuntion = addNumbers;
    //console.log(myFuntion(1,2));

    //myFuntion = greet;
    //console.log(myFuntion("ruben"));

    myFuntion = saveTheWorld;
    console.log(myFuntion);
})()