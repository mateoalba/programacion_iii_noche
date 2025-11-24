"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoAmbulancia = void 0;
var VehiculoAmbulancia = /** @class */ (function () {
    function VehiculoAmbulancia(marca) {
        this.marca = marca;
    }
    VehiculoAmbulancia.prototype.mostrarMarca = function () {
        console.log("La ambulancia marca ".concat(this.marca, " est\u00E1 en servicio."));
    };
    return VehiculoAmbulancia;
}());
exports.VehiculoAmbulancia = VehiculoAmbulancia;
var AmbulanciaEmergencia = /** @class */ (function (_super) {
    __extends(AmbulanciaEmergencia, _super);
    function AmbulanciaEmergencia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AmbulanciaEmergencia;
}(VehiculoAmbulancia));
var miAmbulancia = new AmbulanciaEmergencia("Toyota");
miAmbulancia.mostrarMarca();
