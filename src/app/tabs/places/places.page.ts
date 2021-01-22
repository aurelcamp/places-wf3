import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  // places = [
  //   { imageUrl: 'http://les-combien.com/images/rooms/pirate.jpg', title: 'Pirate', description: 'Affrontez des pirates'},
  //   { imageUrl: 'http://les-combien.com/images/rooms/egypt.jpg', title: 'Pharaon', description: 'Attention à la malédiction'}
  // ]

  places: Place[];

  constructor(
    private placeService: PlaceService,
  ) { }

  async ngOnInit() {

  }

  async ionViewDidEnter() {
    this.places = await this.placeService.getPlaces();
  }

  share(place: any) {
    console.log(place);
  }

  delete(place: any) {
    this.places = this.places.filter((p: any) => p !== place);
  }

}
