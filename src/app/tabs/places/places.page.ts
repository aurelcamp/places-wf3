import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  share(place: any) {
    console.log(place);
  }

  delete(place: any) {
    this.places = this.places.filter((p: any) => p !== place);
  }

}
