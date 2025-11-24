const citas = [
  { paciente: "Juan Pérez", motivo: "Fiebre", doctor: "Dr. López", fecha: "2025-11-25", consultorio: "1A" },
  { paciente: "María Torres", motivo: "Dolor de cabeza", doctor: "Dra. García", fecha: "2025-11-26", consultorio: "2B" },
  { paciente: "Carlos Díaz", motivo: "Chequeo general", doctor: "Dr. Pérez", fecha: "2025-11-27", consultorio: "3C" },
  { paciente: "Ana Gómez", motivo: "Alergia", doctor: "Dra. Ruiz", fecha: "2025-11-28", consultorio: "4D" },
  { paciente: "Luis Castillo", motivo: "Gripe", doctor: "Dr. Medina", fecha: "2025-11-29", consultorio: "5E" },
  { paciente: "Carmen Vera", motivo: "Control prenatal", doctor: "Dra. Aguilar", fecha: "2025-11-30", consultorio: "6F" },
  { paciente: "Pedro Ortiz", motivo: "Dolor abdominal", doctor: "Dr. Jiménez", fecha: "2025-12-01", consultorio: "7G" },
  { paciente: "Sofía Reyes", motivo: "Consulta pediátrica", doctor: "Dra. León", fecha: "2025-12-02", consultorio: "8H" },
  { paciente: "Daniel Rojas", motivo: "Infección", doctor: "Dr. Silva", fecha: "2025-12-03", consultorio: "9I" },
  { paciente: "Gabriela Luna", motivo: "Dermatitis", doctor: "Dra. Torres", fecha: "2025-12-04", consultorio: "10J" }
];

const tabla = document.getElementById('cuerpoTabla');

citas.forEach(c => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${c.paciente}</td>
    <td>${c.motivo}</td>
    <td>${c.doctor}</td>
    <td>${c.fecha}</td>
    <td>${c.consultorio}</td>
  `;
  tabla.appendChild(fila);
});
