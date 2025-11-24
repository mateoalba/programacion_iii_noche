import {Injectable} from '@nestjs/common';

@Injectable()
export class BasicsService {
   myFirstGet(): object {
      return {
        service: 'Blog Backend Api',
        function: 'Basic api',
        message: 'My new Get'
    }
   }


   funtionWithParameter(myParameter: string): object {
        return {
            service: 'Blog Backend Api',
            function: 'Function with Parameter',
            message: 'My parameterized Get',
            parameter: myParameter
        }
    }


    funtionWithPost(parameters: object): object {
        return {
            service: 'Blog Backend Api',
            function: 'Function with Post',
            message: 'My Post Function',
            parameters: parameters
        }
    }


    updateWithPut(parameter: string,
        body: object): object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'My Put Function',
                parameter: parameter,
                body: body
            }
        }



        updateWithPatch(parameter: string,
        body: object): object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'My Put Function',
                parameter: parameter,
                body: body
            }
        }



        delete(parameter: string):
        object {
            return {
                service: 'Blog Backend Api',
                function: 'Function with Put',
                message: 'Funcion para eliminar',
                parameter: parameter,
            }
        }



        calcularEdad(fechaNacimiento: string): number {
            const hoy = new Date();
            const nacimiento = new Date(fechaNacimiento);
            let edad = hoy.getFullYear() - nacimiento.getFullYear();
            const mes = hoy.getMonth() - nacimiento.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
            }
            return edad;
        }



        licencia(body: any): object {
            let respeuesta: string;
        if (body.edad > 17 && body.licencia){
            respeuesta = 'Puede conducir';
        } else if (body.edad > 17){
            respeuesta = 'No puede conducir, le falta la licencia';
            } else {
                respeuesta = 'No puede conducir, es menor de edad';
            }
        return {
            service: 'Blog Backend Api',
            function: 'Licencia de Conducir',
            message: 'Funcion para validar si puede conducir',
            parameter: body,
            response: respeuesta,
        }
    }


    areaTriangulo(parameter: any): object {
        const area = (parameter.base * parameter.altura) / 2;
        return {
            service: 'Blog Backend Api',
            function: 'Area del Triangulo',
            message: 'Funcion para calcular el area de un triangulo',
            parameter: parameter,
            area: area,
        };
    }

    sumarTresNumeros(data: any): object{
        const {n1, n2, n3} = data;
        const suma = n1 + n2 + n3;
        return{
            service: 'Blog Backend Api',
            function: 'Suma de Tres Numeros',
            message: 'Funcion para sumar tres numeros',
            numeros: data,
            suma: suma,
        }
    }

    mayorDeTres(data: any): object{
        const {n1, n2, n3} = data;
        const mayor = Math.max(n1, n2, n3);
        return{
            service: 'Blog Backend Api',
            function: 'Mayor de Tres Numeros',
            message: 'Funcion para obtener el mayor de tres numeros',
            parameter: data,
            mayor: mayor,
    }

}



calcularPromedio(nota1: number,
    nota2: number,
    nota3: number): object {
        
        const promedio = (nota1 + nota2 + nota3) / 3;
        return {
            service: 'Blog Backend Api',   
            function: 'Calcular Promedio',
            message: 'Funcion para calcular el promedio de tres notas',
            notas1: nota1,
            notas2: nota2,
            notas3: nota3,
            promedio: promedio,
        }
    }

    verificarCredito(edad: number,
        ingresos: number,
        historial: string): object {
            let aprobarCredito = "No";

            if (edad >= 18 && ingresos >= 1000 && historial === 'bueno'){
                aprobarCredito = "Si";
            }
            return {
                service: 'Blog Backend Api',
                function: 'Verificar Credito',
                message: 'Funcion para verificar si se aprueba un credito',
                ingresos: ingresos,
                edad: edad,
                historial: historial,
                aprobarCredito: aprobarCredito,
            }
        }
        

}
