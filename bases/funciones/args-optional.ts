(() => {

    const fullName = (firstName: string, lastName?: (string | boolean)): string => { //la interrogación indica que ese argumento es opcional, puede no venir
        return `${firstName} ${lastName || "no last name"}`; //con el or se indica que ponga el argumento si le ha llegado o sino ponga la frase
    }

    const name = fullName("tony", "stark");

    console.log(name);
})()