// Cadena de texto
let nombrePaciente: string = "Carlos López";
console.log("Paciente:", nombrePaciente);

// Número
let numeroCita: number = 1023;
console.log("Número de cita:", numeroCita);

// Booleano
let citaConfirmada: boolean = true;
console.log("¿La cita está confirmada?:", citaConfirmada);

// Any
let informacionExtra: any = "Paciente necesita ayuno previo";
console.log(informacionExtra);

informacionExtra = 8; // ahora es número
console.log("Horas de ayuno requeridas:", informacionExtra);

// Condicional simple
let edadPaciente: number = 17;

if (edadPaciente >= 18) {
    console.log("El paciente es mayor de edad. Puede asistir solo.");
} else {
    console.log("El paciente es menor de edad. Debe venir con un representante.");
}
