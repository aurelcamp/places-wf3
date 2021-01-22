import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place, placeTypes } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place-create',
  templateUrl: './place-create.page.html',
  styleUrls: ['./place-create.page.scss'],
})
export class PlaceCreatePage implements OnInit {

  place: Place = new Place();
  placeTypes = placeTypes;

  constructor(
    private placeService: PlaceService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  validate() {
    this.placeService.addPlace(this.place);
    this.router.navigate(['/tabs/places']);
  }

}
