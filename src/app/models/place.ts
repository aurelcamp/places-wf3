export const placeTypes = ['Paysage', 'Architecture', 'Autre'];

export class Place {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pathUrl: string;
  type: string;

  constructor() {
    this.imageUrl = './assets/images/default_image.png';
    this.id = Date.now().toString();
  }
}
