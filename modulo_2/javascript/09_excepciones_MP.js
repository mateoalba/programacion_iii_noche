// --------------------------
// EJEMPLO 1: Parsear datos de un paciente
// --------------------------

try {
    const paciente = JSON.parse('{"nombre": "María", edad: 28}');  
    // Falta comillas en "edad", por eso da error
} catch (e) {
    console.log("❌ Error al cargar datos del paciente:", e.message);
}


// --------------------------
// EJEMPLO 2: Intentar abrir el historial clínico
// --------------------------

try {
    console.log("Intentando abrir historial clínico del paciente...");

    // Simulación de error
    throw new Error("El historial clínico no está disponible");
} catch (error) {
    console.log("❌ Error:", error.message);
} finally {
    console.log("✔️ Finalizó el intento de abrir el historial, revise la conexión o el archivo.");
}
