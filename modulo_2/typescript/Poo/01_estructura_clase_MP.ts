class Paciente {
    nombre: string;
    edad: number;
    cedula: string;

    constructor(nombre: string, edad: number, cedula: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.cedula = cedula;
    }

    presentarPaciente(): void {
        console.log(`Paciente: ${this.nombre}, Edad: ${this.edad}, Cédula: ${this.cedula}`);
    }

    solicitarCita(especialidad: string): void {
        console.log(`El paciente ${this.nombre} ha solicitado una cita en la especialidad de ${especialidad}.`);
    }
}

// Crear un paciente
const paciente1 = new Paciente("Juan Pérez", 35, "1712345678");

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
