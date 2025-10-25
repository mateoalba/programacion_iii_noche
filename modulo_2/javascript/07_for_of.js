console.log("CICLOS O BUCLES");
console.log("FOR OF");

const nombres = ["Ana", "Luis", "Carlos", "María"];
for (const nombre of nombres) {
    console.log("Hola:", nombre);
}


const n = "Ana";
for (const letra of n) {
    console.log("Letra", letra);
}


const numeros = [4, 15, 8, 23, 42, 16];
let mayor = 0; 
for (const numero of numeros) {
  if (numero > mayor)
mayor = numero;
}
console.log("El número mayor es:", mayor);


// Ejemplo Biblioteca//

const biblioteca = {
    titulo: "IT",
    autor: "Stephen King"
};
let suma_claves = 0;
for (const clave in biblioteca) {
    suma_claves++;
}
console.log("Número de claves en el objeto biblioteca:", suma_claves); 


