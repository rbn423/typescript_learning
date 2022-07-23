(() => {
    
    const fullName = (firstName: string, ...RestArgs: string[]): string => {
        return `${firstName} ${RestArgs.join(" ")}`;//con el .join lo que hace es unir todos los elementos restantes del array separados por un espacio en este caso
    }

    const superman = fullName("clark", "joseph", "kent");

    console.log(superman);
})()