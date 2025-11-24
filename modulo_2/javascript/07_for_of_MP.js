console.log("CICLOS O BUCLES");
console.log("FOR OF");

// Lista de pacientes
const pacientes = ["Ana Torres", "Luis Paredes", "Carlos Luna", "María López"];
for (const paciente of pacientes) {
    console.log("Paciente registrado:", paciente);
}

// Recorrer el nombre de un doctor letra por letra
const doctor = "Dr. Alba";
for (const letra of doctor) {
    console.log("Letra:", letra);
}

// Buscar la cita con mayor duración
const duraciones = [30, 45, 20, 60, 40, 25];
let mayor = 0; 
for (const duracion of duraciones) {
  if (duracion > mayor)
      mayor = duracion;
}
console.log("La cita de mayor duración es:", mayor, "minutos");

// Ejemplo Hospital //
const cita = {
    paciente: "Mateo Alba",
    especialidad: "Medicina General"
};
let totalCampos = 0;
for (const campo in cita) {
    totalCampos++;
}
console.log("Número de datos registrados en la cita:", totalCampos);
