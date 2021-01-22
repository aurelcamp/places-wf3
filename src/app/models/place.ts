export const placeTypes = ['Paysage', 'Architecture', 'Autre'];

export interface Position {
  latitude: number;
  longitude: number;
}

export class Place {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pathUrl: string;
  type: string;
  position: Position;

  constructor() {
    this.imageUrl = './assets/images/default_image.png';
    this.id = Date.now().toString();
  }
}
