import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;

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

  async share(place: Place) {
    console.log(place);
    let shareRet = await Share.share({
      title: place.title,
      text: place.description,
      url: place.pathUrl,
      dialogTitle: 'Partager'
    });
  }

  async delete(place: Place) {
    await this.placeService.removePlace(place);
    this.places = await this.placeService.getPlaces();
  }

}
