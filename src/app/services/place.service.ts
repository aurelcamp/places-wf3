import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  async getPlaces() {
    const places = await Storage.get({ key: 'places' });
    return JSON.parse(places.value) || [];
    // const user = JSON.parse(ret.value);
  }
}
