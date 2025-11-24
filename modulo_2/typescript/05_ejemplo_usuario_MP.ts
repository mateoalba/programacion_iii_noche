interface PacienteLogin {
    id: number;
    nombreUsuario: string;
    correo: string;
    password: string;
}

const paciente1: PacienteLogin = {
    id: 1,
    nombreUsuario: "JuanPerez",
    correo: "juan.perez@example.com",
    password: "cita2025"
};

function iniciarSesionPaciente(paciente: PacienteLogin): void {
    if (paciente.password === 'cita2025' && paciente.nombreUsuario === 'JuanPerez') {
        console.log("Paciente autenticado correctamente");
        console.log(`Paciente ${paciente.nombreUsuario} ha iniciado sesión.`);
        console.log("Paciente", paciente.nombreUsuario, "autenticado exitosamente");
        console.log("Paciente " + paciente.nombreUsuario + " autenticado exitosamente");
    } else {
        console.log("Error en la autenticación del paciente");
    }
}

iniciarSesionPaciente(paciente1);
