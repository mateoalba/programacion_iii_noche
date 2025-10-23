console.log("CONDICIONALES EN JAVASCRIPT");
console.log("CONDICIONALES IF");
let temeperatura = 45;


if (temperatura > 30) {
    console.log("Hace frío");
}


console.log("CONDICIONALES IF ELSE");
const password = "admin123";
if (password === "admin123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}


console.log("CONDICIONALES ANIDADAS");
const edad = 20;
const tieneLicencia = true;
if (edad >= 18) {
    console.log("Eres mayor de edad");
    if (tieneLicencia) {
        console.log("Tienes licencia de conducir");
    } else {
        console.log("No tienes licencia de conducir");
    }
} else {
    console.log("Eres menor de edad");
}


console.log("CONDICIONAL SWTCH");
const dia = "Lunes" ;
switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves": 
    case "Viernes":
        console.log("Día Laboral");
        break;
    case  "Sabado":
    case "Domingo":
        console.log("Día de Fin de Semana");
            break;
    default:
        console.log("Día no reconocido");
}