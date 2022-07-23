(() => {

    interface Xmen {
        name: string,
        realName: string,
        mutantPower( id: number): string
    }

    interface Human{
        age: number
    }
    
    class Mutant implements Xmen, Human{
        public age: number;
        public name: string;
        public realName: string;

        constructor(age: number, name: string, realName: string){
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        public mutantPower(id: number): string {
            return this.name + " " + this.realName
        }
    }
})()