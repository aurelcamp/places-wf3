import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
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
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.place = new Place();
  }

  validate() {
    this.placeService.addPlace(this.place);
    this.router.navigate(['/tabs/places']);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: `Comment ajouter l'image ?`, 
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Appareil photo',
          icon: 'camera-outline',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Dossier',
          icon: 'folder-outline',
          handler: () => {
            console.log('Play clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
