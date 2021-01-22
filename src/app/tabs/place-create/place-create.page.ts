import { Component, OnInit } from '@angular/core';
import { Place, placeTypes } from 'src/app/models/place';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.page.html',
  styleUrls: ['./place-create.page.scss'],
})
export class PlaceCreatePage implements OnInit {

  place: Place = new Place();
  placeTypes = placeTypes;

  constructor() { }

  ngOnInit() {
    
  }

  validate() {
    console.log(this.place);
    console.log(JSON.stringify(this.place));
  }

}
