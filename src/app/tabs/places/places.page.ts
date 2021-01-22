import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = [
    { imageUrl: 'http://les-combien.com/images/rooms/pirate.jpg', title: 'Pirate', description: 'Affrontez des pirates'},
    { imageUrl: 'http://les-combien.com/images/rooms/egypt.jpg', title: 'Pharaon', description: 'Attention à la malédiction'}
  ]

  constructor(
    private placeService: PlaceService,
  ) { }

  async ngOnInit() {
    const places = await this.placeService.getPlaces();
    console.log(places);
  }

  share(place: any) {
    console.log(place);
  }

  delete(place: any) {
    this.places = this.places.filter((p: any) => p !== place);
  }

}
