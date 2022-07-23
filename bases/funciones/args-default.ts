(() => {

    const fullName = (firstName: string, lastName?: (string | boolean), upper: boolean = false): string => {
        
        if (upper)
            return `${firstName} ${lastName || "no hay last name"}`.toUpperCase();
        return `${firstName} ${lastName || "no hay last name"}`;
    }

    const name = fullName("tony", "stark");

    console.log(name);
})()