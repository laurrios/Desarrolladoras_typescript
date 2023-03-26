
export class DatosPersona {
            public nombre: string;
            public apellidos: string;
            public edad: number;
            public dni: number;
            public color: string;
            public sexo: string;
            public direccion: string;
            public mail: string;
            public telefono: number;
            public notas: string;

            constructor (nombre:string, apellidos:string, edad:number, dni:number, color:string, sexo:string, direccion:string, mail:string, telefono:number, notas:string){
                    this.nombre = nombre;
                    this.apellidos = apellidos;
                    this.edad = edad;
                    this.dni = dni;
                    this.color = color;
                    this.sexo = sexo;
                    this.direccion = direccion;
                    this.mail = mail;
                    this.telefono = telefono;
                    this.notas = notas;
                }

}
/*
Todo esto no estoy segura de si lo tengo que incluir aquí o si tiene que ir en el archivo de main.

public setNombre(nombre: string): void {
    this.nombre=nombre;   
}

public getApellidos(): string {
    return this.apellidos;
}
public setApellidos(apellidos: string): void {
    this.apellidos;
}
 
public getEdad(): number {
    return this.edad;
}
public setEdad(edad: number): void {
    this.edad;
}

public getDni(): string {
    return this.dni;
}
public setDni(dni: string): void {
    this.dni;
}

public getColor(): string {
    return this.color;
}
public setColor(color: string): void {
    this.color;
}

public getSexo(): string {
    return this.sexo;
}
public setSexo(sexo: string): void {
    this.sexo;
}

public getDireccion(): string {
    return this.direccion;
}
public setDireccion(direccion: string): void {
    this.direccion;
}

public getMail(): string {
    return this.mail;
}
public setMail(mail: string): void {
    this.mail;
}

public getTelefono(): number {
    return this.telefono;
}
public setTelefono(telefono: number): void {
    this.telefono;
}

public getNotas(): string {
    return this.notas;
}
public setNotas(notas: string): void {
    this.notas;
}
*/
