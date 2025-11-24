// Función simple
function saludarPaciente(nombre: string): string {
    return `Hola ${nombre}, bienvenido al sistema de citas médicas.`;
}
console.log(saludarPaciente("Mateo"));


// Función sin parámetros
function obtenerTotalCitasDelDía(): number {
    return 25 + 5;  // Ejemplo: citas generales + emergencias
}
console.log(obtenerTotalCitasDelDía());


// Función con parámetros obligatorios
function calcularEdadPaciente(anoNacimiento: number, anoActual: number): number {
    return anoActual - anoNacimiento;
}
console.log(calcularEdadPaciente(2000, 2025));


// Parámetro opcional (ej. especialidad opcional)
function agendarCita(paciente: string, especialidad?: string): string {
    return especialidad
        ? `Cita agendada para ${paciente} en ${especialidad}.`
        : `Cita agendada para ${paciente} en medicina general.`;
}
console.log(agendarCita("Carlos", "Cardiología"));
console.log(agendarCita("Lucía"));


// Arrow function equivalente
const agendarCitaFlecha = (paciente: string, especialidad?: string): string => {
    return especialidad
        ? `Cita agendada para ${paciente} en ${especialidad}.`
        : `Cita agendada para ${paciente} en medicina general.`;
}
console.log(agendarCitaFlecha("Mario", "Dermatología"));
console.log(agendarCitaFlecha("Ana"));


// Función void
function mostrarAviso(mensaje: string): void {
    console.log(`📢 Aviso del sistema: ${mensaje}`);
}
mostrarAviso("Recuerde llegar 10 minutos antes de su cita.");
