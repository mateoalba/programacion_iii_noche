// 05_herencia.ts

export class ServicioSalud {
    public nombreServicio: string;

    constructor(nombreServicio: string) {
        this.nombreServicio = nombreServicio;
    }

    mostrarServicio(): void {
        console.log(`El servicio de ${this.nombreServicio} está disponible`);
    }
}
