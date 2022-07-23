(() => {

    class Avenger{

        //private name: string = "scott lang"; //asi se inicializa por defecto
        //public team: string;
        //public realName?: string;
        static avgAge: number = 35;


        /*
        public constructor(name: string, team: string, realName?: string){ //asi se declara el constructor
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        */

        public constructor (
            private name: string, 
            public team: string, 
            public realName?: string, 
            avgAge: number = 35
        ){} //asi no se necesita definir las variables antes

        static getAvgAge(): number{
            //return this.name; //devuelve el nombre de la clase al no estar defindo
            return this.avgAge;
        }
        
        public bio(): string{
            return `${this.name} ${this.team}`;
        }
            
    }

    const antman = new Avenger("antman", "vengadores", "hank pym");
    console.log(antman.realName); //solo se puede acceder a los valores publicos

    console.log(Avenger.avgAge); //a los estaticos se accede mencionando a la clase, no al objeto
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})()