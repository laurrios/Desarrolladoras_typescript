import { DatosPersona } from "./persona";
import { DatosDireccion } from "./direccion";
import { DatosTelefono } from "./telefono";
import { DatosMail } from "./mail";

public getNombre(): string {

    if (this.nombre != "Juan" && this.nombre != "Rosa" && this.nombre != "Maria"){
        console.log ("El contacto no existe");
    }else {
        return this.nombre;
    }
}

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

//Intancia Persona 1
let persona1 = new DatosPersona('Juan', 'Perez', 35, 45544545, 'rojo', 'hombre', 'Calle Mayor, número 18', 'juanperez@correo.com', 666554455, 'es moreno' );

console.log("Nombre: " + persona1.getPersona());
console.log("Apellidos: " + persona1.getApellidos());
console.log("Edad: " + persona1.getEdad());
console.log("DNI: " + persona1.getDni());
console.log("Color: " + persona1.getColor());
console.log("Sexo: " + persona1.getSexo());
console.log("Dirección: " + persona1.getDireccion());
console.log("Email: " + persona1.getMail());
console.log("Teléfono: " + persona1.getTelefono());
console.log("Notas: " + persona1.getNotas());

//Instancia Persona 2
let persona2 = new DatosPersona('Maria', 'Garcia', 25, 462669554, 'verde', 'mujer', 'Calle Grande, número 10', 'mariagarcia@correo.com', 666985632, 'Es rubia' );

console.log("Nombre: " + persona2.getPersona());
console.log("Apellidos: " + persona2.getApellidos());
console.log("Edad: " + persona2.getEdad());
console.log("DNI: " + persona2.getDni());
console.log("Color: " + persona2.getColor());
console.log("Sexo: " + persona2.getSexo());
console.log("Dirección: " + persona2.getDireccion());
console.log("Email: " + persona2.getMail());
console.log("Teléfono: " + persona2.getTelefono());
console.log("Notas: " + persona2.getNotas());

//Instancia Persona 3
let persona3 = new DatosPersona('Pablo', 'Pozo', 38, 48746235, 'azul', 'hombre', 'Calle Rio, número 45', 'pablopozo@correo.com', 658822457, 'Es pelirrojo' );

console.log("Nombre: " + persona3.getPersona());
console.log("Apellidos: " + persona3.getApellidos());
console.log("Edad: " + persona3.getEdad());
console.log("DNI: " + persona3.getDni());
console.log("Color: " + persona3.getColor());
console.log("Sexo: " + persona3.getSexo());
console.log("Dirección: " + persona3.getDireccion());
console.log("Email: " + persona3.getMail());
console.log("Teléfono: " + persona3.getTelefono());
console.log("Notas: " + persona3.getNotas());



//A partir de aquí me ha faltado seguir dandole una vuelta
let direccion= new DatosDireccion('Calle Mayor', 18, 7, 'a', 45210, 'Yuncos', 'Toledo');

console.log(DatosDireccion);


let telefono = new DatosTelefono('movil', 666554455);

console.log(DatosTelefono);


let mail = new DatosMail('correo', 'juanperez@correo.com');

console.log(DatosMail);


