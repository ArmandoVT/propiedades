export class PropiedadModel {
    id: string;
    clave: string;
    delegacion: string;
    colonia: string;
    calle: string;
    exterior: number;
    interior: number;
    precio: number;
    latitud: number;
    longitud: number;
    tipo: boolean;
    descripcion: string;

    constructon() {
        this.tipo = true;
    }
}