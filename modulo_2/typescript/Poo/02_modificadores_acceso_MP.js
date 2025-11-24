var CitaMedica = /** @class */ (function () {
    function CitaMedica(paciente, medico) {
        this.codigoCita = 'CM-2025-001';
        this.paciente = paciente;
        this.medico = medico;
    }
    CitaMedica.prototype.getMedico = function () {
        return this.medico;
    };
    CitaMedica.prototype.setMedico = function (nuevoMedico) {
        this.medico = nuevoMedico;
    };
    CitaMedica.prototype.getCodigo = function () {
        return this.codigoCita;
    };
    return CitaMedica;
}());
var cita1 = new CitaMedica('Mateo Alba', 'Dr. Ramírez');
console.log('Paciente:', cita1.paciente);
console.log('Médico:', cita1.getMedico());
console.log('Código de cita:', cita1.getCodigo());
// Modificar médico
cita1.setMedico('Dra. Fernanda Pérez');
console.log('Médico actualizado:', cita1.getMedico());
