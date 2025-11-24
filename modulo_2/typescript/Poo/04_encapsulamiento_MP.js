var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.password = 'cita2025';
        this.username = username;
    }
    Usuario.prototype.autenticar = function (password) {
        return password == this.password;
    };
    return Usuario;
}());
var usuarioPaciente = new Usuario('PacienteJuan');
// Simulación: el paciente ingresa su contraseña para ver sus citas
var acceso = usuarioPaciente.autenticar('cita2025');
if (acceso) {
    console.log('Acceso permitido: puede ver sus citas médicas.');
}
else {
    console.log('Acceso denegado: contraseña incorrecta.');
}
