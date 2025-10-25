console.log("Funciones en JavaScript");
console.log("Funcion simple");

function saludar(){
    console.log("Hola, bienvenido al tercer semestre");
}
saludar();


console.log("Función con parámetros");
function suma(a, b){
    return a + b;
}
console.log("La suma es:", suma(5,8));


console.log("Función flecha");
const funcionflecha = () => {
    console.log("Esta es una función flecha");
}
funcionflecha();







console.log("Funcion retorno directo");
const cuadrado = x => x * x;
console.log("El cuadrado de 5 es:", cuadrado(5));

console.log("Funcion con parametros por defecto");
function division(z, k=3){
    return z / k;
}
console.log("La división es:", division(9, 8));
console.log("La división es:", division(40));




