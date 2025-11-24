class CitaMedica {
    public paciente: string;      
    private medico: string;       
    protected codigoCita: string = 'CM-2025-001'; 

    constructor(paciente: string, medico: string) {
        this.paciente = paciente;
        this.medico = medico;
    }

    getMedico(): string {
        return this.medico;
    }

    setMedico(nuevoMedico: string): void {
        this.medico = nuevoMedico;
    }

    getCodigo(): string {
        return this.codigoCita;
    }  
}

const cita1 = new CitaMedica('Mateo Alba', 'Dr. Ramírez');

console.log('Paciente:', cita1.paciente);
console.log('Médico:', cita1.getMedico());
console.log('Código de cita:', cita1.getCodigo());

// Modificar médico
cita1.setMedico('Dra. Fernanda Pérez');
console.log('Médico actualizado:', cita1.getMedico());
