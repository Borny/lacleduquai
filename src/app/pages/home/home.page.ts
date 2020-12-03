import { Component } from '@angular/core';


import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public descriptionWords: string[] = [
    // 'Mettre en mouvement',
    'Café',
    'Danse',
    'Théâtre',
    'Communauté',
    // 'Cours',
    // 'Ateliers',
    // 'Rencontres',
    // 'Partages',
    // 'Compagnie Bela et Côme',
    // 'Accueil en résidence',
    // 'Coworking',
    // 'Festival / Le Bruit des Corps'
  ];

  public cardEvents: CardEvent[] = [

  ]

  public readonly HEADER_TITLE = 'Accueil';

  constructor(public popoverController: PopoverController) { }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      mode: 'md'
    });
    return await popover.present();
  }

  public onOpenPopover(event) {
    this.presentPopover(event);
  }

}
