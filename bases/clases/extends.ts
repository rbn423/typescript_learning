(() => {

    class Avenger{

        constructor(public name:string, public realName: string){
            console.log("Avenger llamado!")
        }

        protected getFullName(){ //protected es para que las clases hijas puedan acceder al metodo
            return `${this.name} ${this.realName}`;
        }

        get fullName(): string{
            return this.fullName;
        }

        set fullName(fullName: string){

            if (fullName.length < 3){
                throw new Error("El nuevo nombre debe tener más de 3 caracteres")
            }

            this.fullName = fullName;
        }
    }

    class XMen extends Avenger{
        constructor(name: string, realName: string, public isMutant: boolean){
            super(name, realName);
            this.isMutant = isMutant;
            console.log("xmen llamado");
        }


    }

    const wolverine = new XMen("wolverine", "logan", true)

    console.log(wolverine);
    console.log(wolverine.fullName);//los gets se llaman como objetos
    wolverine.fullName= "fernando";

})()