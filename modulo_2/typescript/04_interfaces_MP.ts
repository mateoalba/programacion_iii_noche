interface Paciente {
    id: number;
    nombre: string;
    correo: string;
}

const paciente1: Paciente = {
    id: 1,
    nombre: "Carlos Ramírez",
    correo: "carlos.ramirez@example.com"
};

console.log(paciente1);
console.log("Nombre del paciente:", paciente1.nombre);


interface CitaMedica {
    id: number;
    doctor: string;
    costo: number;
}

const cita1: CitaMedica = {
    id: 101,
    doctor: "Dra. Lucía Torres",
    costo: 25.50
};

const cita2: CitaMedica = {
    id: 102,
    doctor: "Dr. Fernando Pérez",
    costo: 32.00
};

console.log(cita1);
console.log("Costo de la cita:", cita1.costo);
