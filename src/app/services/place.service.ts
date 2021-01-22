import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Place } from '../models/place';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  async getPlaces(): Promise<Place[]> {
    const places = await Storage.get({ key: 'places' });
    return JSON.parse(places.value) || [];
  }

  async addPlace(place: Place) {
    const places = await this.getPlaces();
    places.push(place);
    await Storage.set({
      key: 'places',
      value: JSON.stringify(places)
    });
  }
}
