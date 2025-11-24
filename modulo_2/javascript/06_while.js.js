console.log("CICLOS O BUCLES");
console.log("CICLO WHILE");
let i=1;
while(i<=100){
    console.log("Numero:", i);
    i++;
}

let valores =[3,4,2,4,5];
let indice=0;
while (valores[indice]>0){
    console.log("Valor:", valores[indice]);
    indice++;
}

let n=1;
while (n<10){
    if (n % 2 !==0){
        console.log("Número impar:", n);
}
    n++;
}

let x=5;
while (n<10){
    if (n % 2 !==0){
        console.log("Número par:", n);
}
    n++;
}


let m=1;
do {
    console.log("Número:", x);
    x++;
} while (x<5);


let contador=1;
suma=0;
do {
    suma+=contador;
    contador++;
} while (contador<=5);
console.log("Suma:", suma);


let reduccion=10;
do {
    console.log("Reducción:", reduccion);
    reduccion--;
} while (reduccion>=0);

//Ejemplo 1//  

let r = 0;
do {
  console.log("6 x " + r + " = " + (6 * r));
  r++;
} while (r <= 10);

// ----  //

let numero=1;
do{
    console.log('${numero}*6=${numero*6}');
    console.log(numero, "*", 6, "=", numero * 6);
    numero++;
} while(numero<=10);

