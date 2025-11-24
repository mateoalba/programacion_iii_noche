var Paciente = /** @class */ (function () {
    function Paciente(nombre, edad, cedula) {
        this.nombre = nombre;
        this.edad = edad;
        this.cedula = cedula;
    }
    Paciente.prototype.presentarPaciente = function () {
        console.log("Paciente: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", C\u00E9dula: ").concat(this.cedula));
    };
    Paciente.prototype.solicitarCita = function (especialidad) {
        console.log("El paciente ".concat(this.nombre, " ha solicitado una cita en la especialidad de ").concat(especialidad, "."));
    };
    return Paciente;
}());
// Crear un paciente
var paciente1 = new Paciente("Juan Pérez", 35, "1712345678");
// Mostrar datos
console.log("Nombre del Paciente:");
console.log(paciente1.nombre);
console.log("Edad del Paciente:");
console.log(paciente1.edad);
console.log("Cédula del Paciente:");
console.log(paciente1.cedula);
// Usar métodos
paciente1.presentarPaciente();
paciente1.solicitarCita("Medicina General");
