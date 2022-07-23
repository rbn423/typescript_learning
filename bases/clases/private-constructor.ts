(() => {

    class Apocalipsis{

        static instance : Apocalipsis;
        private constructor(public name: string){ //solo se puede llamar al constructor desde dentro de la misma clase
            this.name = name;
        }

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance){//comprobamos si la instancia ya existe, esto es para aplicar singleton
                Apocalipsis.instance = new Apocalipsis("soy el unico apocalipsis");
            }
            return Apocalipsis.instance;
        }
    }

    const apocalipsis = new Apocalipsis("soy apocalipsis");//este falla porque el metodo es privado

})()