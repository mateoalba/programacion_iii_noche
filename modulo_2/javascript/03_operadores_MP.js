console.log("VARIABLES EN JAVASCRIPT - CITAS MÉDICAS");

var mensaje1 = "Gestión de citas médicas iniciada";
var mensaje2 = "Paciente en registro";

console.log(mensaje1);
console.log(mensaje1 + " - " + mensaje2);
console.log(`${mensaje1} - ${mensaje2} - Total citas del día: ${4 + 5}`);

let numeroCitas = 24;
const maxCitasDiarias = 45;
console.log(numeroCitas, maxCitasDiarias);

console.log("TIPOS DE DATOS");

var nombrePaciente = "Carlos Méndez";
console.log("string", typeof(nombrePaciente));

var edadPaciente = 45;
console.log("number", typeof(edadPaciente));

var esUrgente = true;
console.log("boolean", typeof(esUrgente));

var citaPendiente;
console.log("undefined", typeof(citaPendiente));

var historial = null;
console.log("null", typeof(historial));

var identificador = Symbol("id_cita");
console.log("symbol", typeof(identificador));

var numeroHistoriaClinica = 9876543210123456789n;
console.log("bigint", typeof(numeroHistoriaClinica));

const paciente = {
    nombre: "Carlos Méndez",
    edad: 45,
    especialidad: "Medicina General"
};

console.log("OBJETOS EN JAVASCRIPT", typeof(paciente));
console.log(paciente);
console.log(paciente.edad);
console.log(paciente.nombre);
