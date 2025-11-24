function saludar(nombre: string): string{
    return `Hola desde una funcion TypeScript`;
}
console.log(saludar("Mateo"));


function suma(): number{
    return 5 + 3;
}
console.log(suma());


function sumar(numero1: number, numero2: number): number{
    return numero1 + numero2;
}
console.log(sumar(10, 15));


function sumarOpcional(numero1: number, numero2?: number): number{
return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(10, 15));
console.log(sumarOpcional(10));

const sumarflecha = (numero1: number, numero2?: number): number =>{
    return numero1 + (numero2 || 15);
}
console.log(sumarflecha(10, 15));
console.log(sumarflecha(10));


function mostrarMensaje(mensaje: string): void{
    console.log(mensaje);
}
mostrarMensaje("Este es un mensaje de tipo void.");