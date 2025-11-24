import  {vehiculos} from "./05_herencia";
 
class camion extends vehiculos {
    capacidadCarga: number=0;
    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }
    getCapacidad(): number {
        return this.capacidadCarga;
    }
}
const miCamion = new camion('Volvo');
miCamion.setCapacidad(20000);
console.log('Capacidad', miCamion.getCapacidad(), 'kg');
miCamion.mostrarMarca();
