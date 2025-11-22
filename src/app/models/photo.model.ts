export interface Photo {
  id: number;
  titulo: string;
  autor: string;
  ubicacion: string;
  descripcion: string;
  imagen: string;
  especie?: string;
  coordenadas?: string;
}
