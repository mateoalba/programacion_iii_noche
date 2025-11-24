class Usuario {
    private password: string = '12345';
    public username: string;
    constructor(username: string) {
        this.username = username;
    }  
    autenticar(password: string) : boolean {
        return password==this.password;
    }

}
const usuarioPa = new Usuario('Mateo');
const esAutenticado = usuarioPa.autenticar('12345');
if (esAutenticado) {
    console.log('Usuario autenticado correctamente');
} else {
    console.log('Error de autenticacion');
}