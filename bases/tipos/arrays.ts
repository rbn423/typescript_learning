(() => {
    const numbers: (string | number | boolean)[] = [1,2,3,4,5,"6",7,8,9];
    const villians: string[] = ["duende verde", "venom", "loki"];

    numbers.push(true)
    
    console.log({numbers});

    villians.forEach(v => console.log(v.toUpperCase()));
})()