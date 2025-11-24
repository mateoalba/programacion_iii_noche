"use strict";
// 05_herencia.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioSalud = void 0;
var ServicioSalud = /** @class */ (function () {
    function ServicioSalud(nombreServicio) {
        this.nombreServicio = nombreServicio;
    }
    ServicioSalud.prototype.mostrarServicio = function () {
        console.log("El servicio de ".concat(this.nombreServicio, " est\u00E1 disponible"));
    };
    return ServicioSalud;
}());
exports.ServicioSalud = ServicioSalud;
