(() => {

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironman: Avenger = {
        name: "ironman",
        weapon: "armorsuit"
    }

    const capitan_america: Avenger = {
        name: "capitan america",
        weapon: "escudo"
    }

    const thor: Avenger = {
        name: "thor",
        weapon: "martillo"
    }

    const avengers: Avenger[] = [ironman, thor, capitan_america];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})()