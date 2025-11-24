console.log("VARIABLES EN JAVASCRIPT - CITAS MÉDICAS");

var cita1 = "Cita médica agendada correctamente";
var cita2 = "Cita médica actualizada";

console.log(cita1);
console.log(cita1 + " " + cita2);
console.log(`${cita1} ${cita2} ${4 + 5}`);

let numeroCita = 1024;
const consultorio = 12;
console.log(numeroCita, consultorio);


console.log("TIPOS DE DATOS - CITAS MÉDICAS");

var pacienteNombre = "Carlos Pérez";
console.log("string", typeof(pacienteNombre));

var edadPaciente = 45;
console.log("number", typeof(edadPaciente));

var tieneSeguro = true;
console.log("boolean", typeof(tieneSeguro));

var datoIncompleto;
console.log("undefined", typeof(datoIncompleto));

var citaCancelada = null;
console.log("null", typeof(citaCancelada));

var codigoSimbolo = Symbol("codigo_cita");
console.log("symbol", typeof(codigoSimbolo));

var numeroHistoriaClinica = 9007199254740991n;
console.log("bigint", typeof(numeroHistoriaClinica));


const paciente = {
    nombre: "Carlos Pérez",
    edad: 45,
};

console.log("OBJETOS EN JAVASCRIPT - PACIENTE", typeof(paciente));
console.log(paciente);
console.log(paciente.edad);
console.log(paciente.nombre);
