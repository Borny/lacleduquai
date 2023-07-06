import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public readonly HEADER_TITLE = 'Cours 2022-2023';
  public readonly TITLE =
    'Programme des ateliers hebdomadaires La Clé du Quai 2022-2023';

  public schedules = [
    {
      heading: 'Lundi',
      activities: [
        {
          properties: [
            { name: 'Atelier', value: 'Théâtre' },
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Jérôme Chambon' },
          ],
        },
        {
          properties: [
            { name: 'Atelier', value: 'Théâtre' },
            { name: 'Horaires', value: '20h30-22h30' },
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
            { name: 'Atelier', value: 'Danse contemporaine' },
            { name: 'Horaires', value: '18h30-20h30' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
        {
          properties: [
            { name: 'Atelier', value: 'Danse-Théâtre' },
            { name: 'Horaires', value: '20h30-22h30' },
            { name: 'Niveau', value: 'Tout niveau' },
            { name: 'Intervenant', value: 'Côme Tanguy' },
          ],
        },
      ],
    },
    // {
    //   heading: 'Mercredi',
    //   activities: [
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse-Théâtre' },
    //         { name: 'Horaires', value: '18h30-20h30' },
    //         { name: 'Niveau', value: 'Tout niveau' },
    //         { name: 'Intervenant', value: 'Côme Tanguy' },
    //       ],
    //     },
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse Contemporaine' },
    //         { name: 'Horaires', value: '20h30-22h30' },
    //         { name: 'Niveau', value: 'Tout niveau' },
    //         { name: 'Intervenant', value: 'Côme Tanguy' },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   heading: 'Jeudi',
    //   activities: [
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Théâtre' },
    //         { name: 'Horaires', value: '18h30-20h30' },
    //         { name: 'Niveau', value: 'Tout niveau' },
    //         { name: 'Intervenant', value: 'Julien Jamet' },
    //       ],
    //     },
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Théâtre - Improvisation' },
    //         { name: 'Horaires', value: '20h30-22h30' },
    //         { name: 'Niveau', value: 'Tout niveau' },
    //         { name: 'Intervenant', value: 'Julien Jamet' },
    //       ],
    //     },
    //   ],
    // },
  ];

  constructor() {}

  ngOnInit() {}
}
