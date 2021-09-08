import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public readonly HEADER_TITLE = 'Cours 2021-2022';
  public readonly TITLE =
    'Programme des cours hebdomadaire La Clé du Quai 2021-2022';

  public descriptionItems: string[] = [
    `Située au sous-sol, jolie cave bordelaise voutée de 50m2`,
    `Parquet souple, idéal pour la danse`,
    `Equipée d'une sono: prise mini-jack / CD / bluetooth`,
    `Pas de réseau téléphonique ni internet`,
    `5€ de l'heure pour vos répétitions`,
    `20€ de l'heure pour vos ateliers`,
  ];

  constructor() {}

  ngOnInit() {}
}
