namespace Validations{

    export const validateText = (text: string) => {
        if(text.length > 3)
            return true
        return false
    }

    export const validateDate = (fecha: Date) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    }

}

console.log( Validations.validateText("rub") );
