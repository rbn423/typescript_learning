(() => {
    const hero: [string, number, boolean] = ["dr.strange", 100, true]; //asi se define una tupla, por lo que el primer valor siempre tiene que ser un string y el segundo un number

    hero[0] = "Iron Man"
    hero[1] = 50
    hero[2] = false
    
    console.log({hero})
})()