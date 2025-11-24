class Usuario {
    private password: string = 'cita2025';
    public username: string;

    constructor(username: string) {
        this.username = username;
    }  

    autenticar(password: string): boolean {
        return password == this.password;
    }
}

const usuarioPaciente = new Usuario('PacienteJuan');

// Simulación: el paciente ingresa su contraseña para ver sus citas
const acceso = usuarioPaciente.autenticar('cita2025');

if (acceso) {
    console.log('Acceso permitido: puede ver sus citas médicas.');
} else {
    console.log('Acceso denegado: contraseña incorrecta.');
}
