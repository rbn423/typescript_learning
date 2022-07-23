(() => {
    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class XMen extends Mutante{
        public salvarMundo(): string{
            return "Mundo salvado"
        }
    }

    class Villian extends Mutante{
        public conquistarMundo(): string{
            return "Mundo conquistado"
        }
    }

    const wolverine = new XMen("wolverine", "logan");
    const magneto = new Villian("magneto", "magnus");

    const printName = ( character: Mutante) => {
        console.log(character.name);
    }

    printName(wolverine);
    printName(magneto);

})()