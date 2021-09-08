import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.page.html',
  styleUrls: ['./studio.page.scss'],
})
export class StudioPage implements OnInit {

  public readonly HEADER_TITLE = 'Studio - 50m2';
  public readonly TITLE = 'Notre Cave Créative';

  public descriptionItems: string[] = [
    `Située au sous-sol, jolie cave bordelaise voutée de 50m2`,
    `Parquet souple, idéal pour la danse`,
    `Equipée d'une sono: prise mini-jack / CD / bluetooth`,
    `Pas de réseau téléphonique ni internet`,
    `5€ de l'heure pour vos répétitions`,
    `20€ de l'heure pour vos ateliers`
  ];

  constructor() { }

  ngOnInit() {
  }

}
