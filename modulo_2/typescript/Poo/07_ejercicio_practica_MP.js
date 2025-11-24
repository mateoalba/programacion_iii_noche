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
var CuentaPacienteBase = /** @class */ (function () {
    function CuentaPacienteBase() {
        this.saldoPendiente = 0; // Saldo por pagar
    }
    CuentaPacienteBase.prototype.modificarSaldo = function (monto) {
        this.saldoPendiente += monto;
    };
    CuentaPacienteBase.prototype.consultarSaldo = function () {
        return this.saldoPendiente;
    };
    return CuentaPacienteBase;
}());
var CuentaConsultaGeneral = /** @class */ (function (_super) {
    __extends(CuentaConsultaGeneral, _super);
    function CuentaConsultaGeneral() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaConsultaGeneral.prototype.procesarMovimiento = function () {
        console.log("Procesando pago de CONSULTA GENERAL...");
    };
    return CuentaConsultaGeneral;
}(CuentaPacienteBase));
var CuentaEspecialista = /** @class */ (function (_super) {
    __extends(CuentaEspecialista, _super);
    function CuentaEspecialista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaEspecialista.prototype.procesarMovimiento = function () {
        console.log("Procesando pago de CONSULTA CON ESPECIALISTA...");
    };
    return CuentaEspecialista;
}(CuentaPacienteBase));
// -------------------------------
// PRUEBAS
// -------------------------------
// Paciente que pagó una consulta general
var cuentaGeneral = new CuentaConsultaGeneral();
cuentaGeneral.modificarSaldo(25); // Agrega pago pendiente
cuentaGeneral.procesarMovimiento();
console.log("Saldo pendiente de consulta general:", cuentaGeneral.consultarSaldo());
// Paciente que pagó una consulta con especialista
var cuentaEspecialista = new CuentaEspecialista();
cuentaEspecialista.modificarSaldo(40);
cuentaEspecialista.procesarMovimiento();
console.log("Saldo pendiente con especialista:", cuentaEspecialista.consultarSaldo());
