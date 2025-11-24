console.log("Funciones en JavaScript - Tema Citas Médicas");

console.log("Función simple");

function saludar(){
    console.log("Bienvenido al sistema de citas médicas");
}
saludar();


console.log("Función con parámetros");
function agendarCita(paciente, doctor){
    return `Cita registrada para ${paciente} con el Dr. ${doctor}`;
}
console.log(agendarCita("Mateo", "Ramírez"));


console.log("Función flecha");
const mostrarAviso = () => {
    console.log("Recuerde llegar 10 minutos antes a su cita");
}
mostrarAviso();




console.log("Función retorno directo");
const calcularCosto = precio => precio * precio;
console.log("Costo estimado (solo ejemplo):", calcularCosto(5));


console.log("Función con parámetros por defecto");
function pagarConsulta(valor, descuento = 5){
    return valor - descuento;
}
console.log("Total a pagar:", pagarConsulta(30, 10));
console.log("Total a pagar:", pagarConsulta(40));
