abstract class CuentaPacienteBase {
    private saldoPendiente: number = 0; // Saldo por pagar
    abstract procesarMovimiento(): void;

    modificarSaldo(monto: number): void {
        this.saldoPendiente += monto;
    }

    consultarSaldo(): number {
        return this.saldoPendiente;
    }
}

class CuentaConsultaGeneral extends CuentaPacienteBase {
    procesarMovimiento(): void {
        console.log("Procesando pago de CONSULTA GENERAL...");
    }
}

class CuentaEspecialista extends CuentaPacienteBase {
    procesarMovimiento(): void {
        console.log("Procesando pago de CONSULTA CON ESPECIALISTA...");
    }
}

// -------------------------------
// PRUEBAS
// -------------------------------

// Paciente que pagó una consulta general
const cuentaGeneral = new CuentaConsultaGeneral();
cuentaGeneral.modificarSaldo(25); // Agrega pago pendiente
cuentaGeneral.procesarMovimiento();
console.log("Saldo pendiente de consulta general:", cuentaGeneral.consultarSaldo());

// Paciente que pagó una consulta con especialista
const cuentaEspecialista = new CuentaEspecialista();
cuentaEspecialista.modificarSaldo(40);
cuentaEspecialista.procesarMovimiento();
console.log("Saldo pendiente con especialista:", cuentaEspecialista.consultarSaldo());
