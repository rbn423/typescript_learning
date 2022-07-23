(() => {
    class Avenger {
        name;
        power;

        constructor( name, power){
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger{
        flying;

        constructor(name, power){
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger("hulk", 9000);
    const falcon = new FlyingAvenger("falcon",50)

    console.log(hulk)
})()