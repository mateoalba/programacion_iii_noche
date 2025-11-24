var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta para representar un profesional médico
var ProfesionalMedico = /** @class */ (function () {
    function ProfesionalMedico() {
    }
    ProfesionalMedico.prototype.mover = function () {
        console.log('El profesional médico se está trasladando al consultorio.');
    };
    return ProfesionalMedico;
}());
// Clase concreta que hereda de ProfesionalMedico
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.realizarConsulta = function () {
        console.log('El doctor está atendiendo una consulta médica.');
    };
    return Doctor;
}(ProfesionalMedico));
var doctorPerez = new Doctor();
doctorPerez.realizarConsulta();
doctorPerez.mover();
