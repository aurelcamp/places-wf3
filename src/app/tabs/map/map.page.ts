import { Component, OnInit } from '@angular/core';
import { icon, LatLng, latLng, Layer, marker, tileLayer } from 'leaflet';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  showMap = false;
  options: any;
  center: LatLng;
  layers: Layer[];

  constructor(
    private placeService: PlaceService,
  ) { }

  async ngOnInit() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 10,
      center: latLng(48.3, 4.07)
    };

    const places = await this.placeService.getPlaces();
    this.layers = places.filter((p: Place) => !!p.position).map((p: Place) => {
      return marker([ p.position.latitude, p.position.longitude ], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'assets/marker-icon.png',
          shadowUrl: 'assets/marker-shadow.png'
        })
      })
    })

    setTimeout(() => this.showMap = true);
  }

}
