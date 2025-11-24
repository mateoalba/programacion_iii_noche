

try {
    const user = JSON.parse('{"name": "Juan",  edad:30}');
} catch (e) {
    console.log("Error al parsear JSON:", e.message);
    
}


try {
    console.log("Intentado abrir un archivo...");
    throw new Error("No se pudo abrir el archivo");
} catch (error) {
    console.log("Error:", error.message);  
}finally {
    console.log("Finalizo el intento de abrir archivo.");
}




