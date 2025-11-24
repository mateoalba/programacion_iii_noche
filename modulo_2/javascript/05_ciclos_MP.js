console.log("CICLOS O BUCLES - CITAS MÉDICAS");

// Recorriendo citas del día
for (let i = 1; i <= 5; i++) {
    console.log("Cita número:", i);
}

// Sumar cantidad de citas de un médico
let totalCitas = 0;
for (let i = 1; i <= 1; i++) {
    totalCitas += i;
}
console.log("Total de citas asignadas:", totalCitas);

// Recorrer el nombre de un paciente
let paciente = "Carlos";
for (let i = 0; i < paciente.length; i++) {
    console.log(paciente[i]);
}

// Intento de mostrar duración de citas (fix del error del original)
for (let i = 1; i <= 5; i++) {
    console.log(`Duración estimada de la cita ${i}: ${i * 10} minutos`);
}
