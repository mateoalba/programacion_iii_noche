console.log("CONDICIONALES EN JAVASCRIPT");
console.log("CONDICIONALES IF");


let temperatura = 38;

if (temperatura > 37) {
    console.log("El paciente tiene fiebre");
}

console.log("CONDICIONALES IF ELSE");



const password = "medico2025";

if (password === "medico2025") {
    console.log("Acceso concedido al sistema de citas");
} else {
    console.log("Acceso denegado");
}

console.log("CONDICIONALES ANIDADAS");



const edadPaciente = 65;
const tieneReferencia = true;

if (edadPaciente >= 18) {
    console.log("Paciente es mayor de edad");
    if (tieneReferencia) {
        console.log("Puede agendar una cita especializada");
    } else {
        console.log("Requiere una referencia médica");
    }
} else {
    console.log("Pacientes menores requieren autorización");
}

console.log("CONDICIONAL SWITCH");




const tipoCita = "Odontología";

switch (tipoCita) {
    case "Medicina General":
    case "Pediatría":
    case "Ginecología":
    case "Odontología":
    case "Nutrición":
        console.log("Cita disponible en horario laboral");
        break;

    case "Emergencia":
        console.log("Atención inmediata");
        break;

    default:
        console.log("Tipo de cita no reconocida");
}
