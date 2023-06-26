export interface NuevoUsuario {

    //Datos
    nombre: string;
    apellido: string;
    email: string;

    //login
    nombreUsuario: string;
    password: string;

    //Authorities
    authorities: string[];

}
