import { Body, Controller, Get, Post, Param, Put, Patch, Delete, Query} from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(
        private readonly basicsService: BasicsService
    ){}
    
    @Get()
    myFirstGet(): object {
    return this.basicsService.myFirstGet();
    }



    @Get(':myParameter')
    requestWithParameter(
        @Param('myParameter') myParameter: string){
            return this.basicsService
            .funtionWithParameter(myParameter);
        }



        @Post()
        create(@Body() bodyData: object){
            return this.basicsService
            .funtionWithPost(bodyData);
        }


        @Put('ID')
        update(
            @Param('ID') id: string,
            @Body() updateBody: object){
                return this.basicsService
                .updateWithPut(id, updateBody);
        }



        @Patch(':ID')
        updatePatch(
            @Param('ID') id: string,
            @Body() updateBody: object){
                return this.basicsService
                .updateWithPatch(id, updateBody);
        }



        @Delete(':ID')
        delete(
            @Param('ID') id: string,
            ) {
                return this.basicsService
                .delete(id);
        }




        @Post('Edad')
        calcularEdad(@Body() body: any) {
        if (!body || !body.fechaNacimiento) {
            return { error: 'Debe enviar una fechaNacimiento en el cuerpo de la petición' };
        }

        const edad = this.basicsService.calcularEdad(body.fechaNacimiento);
        return { edad };
        }



        @Post('LicenciadeConducir')
        licencia(@Body() bodyData: object) {
            return this.basicsService.licencia(bodyData);
        }


        @Post('area-triangulo')
        areaTriangulo(@Body() bodyData: object) {
            return this.basicsService
            .areaTriangulo(bodyData);
        }


        @Post('sumar-tres')
        sumarTres(@Body() bodyData: object) {
            return this.basicsService
            .sumarTresNumeros(bodyData);
        }

        @Post('mayor-tres')
        mayorTres(@Body() bodyData: object) {
            return this.basicsService
            .mayorDeTres(bodyData);
        }



        @Get('calcular-promedio/:nota1/:nota2/:nota3')
        promedio(
            @Param('nota1') nota1: string,
            @Param('nota2') nota2: string,
            @Param('nota3') nota3: string,
        ){
            return this.basicsService
            .calcularPromedio(+nota1, +nota2, +nota3);
        }


        @Get('verficar-credito-hipotecario/')
        verificarCredito(
            @Query('edad') edad: string,
            @Query('ingresos') ingresos: string,
            @Query('historial') historial: string,
        ){
            return this.basicsService
            .verificarCredito(+edad, +ingresos, historial
        );


}

 }
