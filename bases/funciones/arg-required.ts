(() => {

    const fullName = (firstName: string, lastName: (string | boolean)): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName("tony", "stark");

    console.log(name);
})()