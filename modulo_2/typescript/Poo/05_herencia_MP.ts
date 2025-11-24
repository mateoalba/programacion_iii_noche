export class VehiculoAmbulancia {
    public marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    mostrarMarca(): void {
        console.log(`La ambulancia marca ${this.marca} está en servicio.`);
    }
}

class AmbulanciaEmergencia extends VehiculoAmbulancia {}

const miAmbulancia = new AmbulanciaEmergencia("Toyota");
miAmbulancia.mostrarMarca();
