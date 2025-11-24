// Clase abstracta para representar un profesional médico
abstract class ProfesionalMedico {
    abstract realizarConsulta(): void;

    mover(): void {
        console.log('El profesional médico se está trasladando al consultorio.');
    }
}

// Clase concreta que hereda de ProfesionalMedico
class Doctor extends ProfesionalMedico {
    realizarConsulta(): void {
        console.log('El doctor está atendiendo una consulta médica.');
    }
}

const doctorPerez = new Doctor();
doctorPerez.realizarConsulta();
doctorPerez.mover();
