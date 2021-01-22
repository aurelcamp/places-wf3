import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Place, placeTypes } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

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
            this.takePicture(CameraSource.Camera);
          }
        },
        {
          text: 'Dossier',
          icon: 'folder-outline',
          handler: () => {
            console.log('Play clicked');
            this.takePicture(CameraSource.Photos);
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: source
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    console.log(image);
    this.place.imageUrl = image.webPath;
    // Can be set to the src of an image now
  }

}
