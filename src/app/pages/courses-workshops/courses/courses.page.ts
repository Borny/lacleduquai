import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public readonly HEADER_TITLE = 'Cours 2021-2022';
  public readonly TITLE =
    'Programme des ateliers hebdomadaires La Clé du Quai 2021-2022';

  public schedules = [
    {
      heading: 'Lundi',
      activities: [
        {
          properties: [
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Atelier', value: 'Théâtre' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Jérôme Chambon' },
          ],
        },
        {
          properties: [
            { name: 'Horaires', value: '20h30-22h30' },
            { name: 'Atelier', value: 'Théâtre' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Jérôme Chambon' },
          ],
        },
      ],
    },
    {
      heading: 'Mardi',
      activities: [
        {
          properties: [
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Atelier', value: 'Danse contemporaine' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
        {
          properties: [
            { name: 'Horaires', value: '20h30-23h00' },
            { name: 'Atelier', value: 'Cie Amateur Danse-Théâtre' },
            { name: 'Niveau', value: 'Avancé' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
      ],
    },
    {
      heading: 'Mercredi',
      activities: [
        {
          properties: [
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Atelier', value: 'Danse-Théâtre' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
        {
          properties: [
            { name: 'Horaires', value: '20h30-22h30' },
            { name: 'Atelier', value: 'Danse Contemporaine' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
      ],
    },
    {
      heading: 'Jeudi',
      activities: [
        {
          properties: [
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Atelier', value: 'Théâtre' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Julien Jamet' },
          ],
        },
        {
          properties: [
            { name: 'Horaires', value: '20h30-22h30' },
            { name: 'Atelier', value: 'Théâtre - Improvisation' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Julien Jamet' },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
