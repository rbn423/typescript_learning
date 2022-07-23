"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        if (text.length > 3)
            return true;
        return false;
    };
    Validations.validateDate = (fecha) => {
        return (isNaN(fecha.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("rub"));
//# sourceMappingURL=main.js.map