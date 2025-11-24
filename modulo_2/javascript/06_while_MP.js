console.log("CICLOS O BUCLES");
console.log("CICLO WHILE");

// Ejemplo: mostrar números de citas agendadas
let i = 1;
while (i <= 100) {
    console.log("Cita número:", i);
    i++;
}

// Revisar valores de tiempos de espera (en minutos)
let tiemposEspera = [15, 20, 10, 5, 30];
let indice = 0;
while (tiemposEspera[indice] > 0) {
    console.log("Tiempo de espera:", tiemposEspera[indice], "min");
    indice++;
}

// Mostrar solo citas en horario impar
let n = 1;
while (n < 10) {
    if (n % 2 !== 0) {
        console.log("Cita en horario impar:", n);
    }
    n++;
}

// Mostrar citas en horario par
let x = 1;
while (x < 10) {
    if (x % 2 === 0) {
        console.log("Cita en horario par:", x);
    }
    x++;
}


// do…while – Ejemplo: mostrar números de consultorios
let consultorio = 1;
do {
    console.log("Consultorio:", consultorio);
    consultorio++;
} while (consultorio < 5);

// Calcular total de pacientes atendidos
let contador = 1;
let totalPacientes = 0;
do {
    totalPacientes += contador;
    contador++;
} while (contador <= 5);

console.log("Total de pacientes atendidos:", totalPacientes);

// Contador regresivo: tiempo restante para abrir la consulta
let minutos = 10;
do {
    console.log("Minutos para iniciar consulta:", minutos);
    minutos--;
} while (minutos >= 0);


// Tabla de multiplicar para generar turnos cada 6 minutos
let r = 0;
do {
  console.log("Turno cada 6 min: " + r + " → " + (6 * r) + " min");
  r++;
} while (r <= 10);


// Otra forma de mostrar turnos cada 6 minutos
let turno = 1;
do {
    console.log(`${turno} * 6 = ${turno * 6} min`);
    console.log(turno, "*", 6, "=", turno * 6);
    turno++;
} while (turno <= 10);
