export class DatosDireccion {
    public calle: string;
    public numero: number;
    public piso: number;
    public letra: string;
    public codigopostal: number;
    public poblacion: string;
    public provincia: string;

    constructor(calle:string, numero:number, piso:number, letra:string,
        codigopostal:number, poblacion:string, provincia:string){
            this.calle = calle;
            this.numero = numero;
            this.piso = piso;
            this.letra = letra;
            this.codigopostal = codigopostal;
            this.poblacion = poblacion;
            this.provincia = provincia;
        }
}

