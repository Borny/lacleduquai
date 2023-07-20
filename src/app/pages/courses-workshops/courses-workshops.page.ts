import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-workshops',
  templateUrl: './courses-workshops.page.html',
  styleUrls: ['./courses-workshops.page.scss'],
})
export class CoursesWorkshopsPage implements OnInit {
  public readonly HEADER_TITLE = 'Activités';
  public readonly TITLE = 'Découvrez nos activités';

  public schedules = [
    {
      heading: 'Mardi',
      activities: [
        {
          properties: [
            { name: 'Atelier', value: 'Danse Contemporaine - Impro' },
            { name: 'Horaires', value: '18h30-20h30' },
            // { name: 'Niveau', value: 'Tout niveau' },
            // { name: 'Intervenant', value: 'Jérôme Chambon' },
            { name: 'Lieu', value: 'Studio 71 Bordeaux' },
          ],
        },
        {
          properties: [
            { name: 'Atelier', value: 'Danse-Théâtre' },
            { name: 'Horaires', value: '20h30-22h30' },
            // { name: 'Niveau', value: 'Tout niveau' },
            // { name: 'Intervenant', value: 'Jérôme Chambon' },
            { name: 'Lieu', value: 'Studio 71 Bordeaux' },
          ],
        },
      ],
    },
    // {
    //   heading: 'Mercredi',
    //   activities: [
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse Contemporaine - Impro' },
    //         { name: 'Horaires', value: '18h30-20h30' },
    //         // { name: 'Niveau', value: 'Tout niveau' },
    //         // { name: 'Intervenant', value: 'Côme Tanguy' },
    //         { name: 'Lieu', value: 'Salle à valider' },
    //       ],
    //     },
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse Contemporaine - écriture chorégraphique' },
    //         { name: 'Horaires', value: '20h30-22h30' },
    //         // { name: 'Niveau', value: 'Tout niveau' },
    //         // { name: 'Intervenant', value: 'Côme Tanguy' },
    //         { name: 'Lieu', value: 'Salle à valider' },
    //       ],
    //     },
    //   ],
    // },
    {
      heading: 'Jeudi',
      activities: [
        {
          properties: [
            { name: 'Atelier', value: 'Danse contemporaine - Enfants' },
            { name: 'Horaires', value: '18h-19h' },
            { name: 'Lieu', value: 'Sore' },
          ],
        },
        {
          properties: [
            { name: 'Atelier', value: 'Danse contemporaine - Adultes' },
            { name: 'Horaires', value: '19h15-20h45' },
            { name: 'Lieu', value: 'Sore' },
          ],
        },
      ],
    },
    // {
    //   heading: 'Vendredi',
    //   activities: [
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse Contemporaine - Impro' },
    //         { name: 'Horaires', value: '18h30-20h' },
    //     { name: 'Lieu', value: 'Sore' },
    //       ],
    //     },
    //   ],
    // },
  ];

  public compagnieAmateur = [
    {
      heading: 'Horaires',
      content: ['10h - 18h']
    },
    {
      heading: 'Dates',
      content: [
        '7-8 Octobre 2023',
        '11-12 Novembre 2023',
        '9-10 Décembre 2023',
        // '13-14 Janvier 2024',
        // '10-11 Février 2024',
        // '9-10 Mars 2024',
        // '6-7 Avril 2024',
        // '4-5 Mai 2024',
      ]
    },
    {
      heading: 'Lieu',
      content: ['LalaLandes']
    },
  ]

  public stages = [
    {
      headers: ['Evènement', 'Date', 'Horaire', 'Lieu'],
      content: [
        // ['Stages Eté 2023', '10-14 Juillet 2023', '10h - 17h', 'LalaLandes'],
        ['Stage w-e 1', '14-15 Octobre 2023', '10h - 17h', 'LalaLandes'],
        ['Stage w-e 2', '25-26 Novembre 2023', '10h - 17h', 'Bordeaux'],
        // ['Stage mi-long 1', '23-24-25-26 Novembre 2023','10h - 17h','LalaLandes'],
        ['Stage w-e 3', 'Le 17 décembre 2023', '10h - 17h', 'Bordeaux'],
        // ['Stage w-e 4', 'Le 28 Janvier 2024','10h - 17h','Bordeaux'],
        // ['Stage long 1 :', 'Du 26 Février au 1er Mars 2024','10h - 17h','Bordeaux'],
        // ['Stage w-e 5', '23-24 Mars 2024','10h - 17h','LalaLandes'],
        // ['Stage w-e 6', '25-26 Mai 2024','10h - 17h','LalaLandes'],
        // ['Stage été 2024', 'du 8 au 12 Juillet 2024','10h - 17h','LalaLandes'],
      ]
    },
  ]

  public expressiv = [
    {
      headers: ['Date', 'Horaire', 'Lieu'],
      content: [
        ['13 septembre 2023', 'Soirée', 'Bordeaux'],
        ['25 novembre 2023', 'Soirée', 'Bordeaux'],
        ['16 décembre 2023', 'Soirée', 'Bordeaux'],
      ]
    },
  ]

  public tarifs = [
    {
      headers: ['Cours hebdomadaire Bordeaux'],
      content: [
        ['Quantité', '1', '2'],
        ['Prix', '430€', '730€ (-15%)'],
        ['A la carte', '20€'],
      ]
    },
    {
      headers: ['Cours hebdomadaire Sore'],
      content: [
        ['Enfants', '250€'],
        ['Adultes', '350€'],
        ['A la carte', '15€'],
      ]
    },
    // {
    //   headers: 'Cours à la carte',
    //   content: [['Prix','20€']]
    // },
    {
      headers: ['Compagnie Amateur - 8 weekend + logement + représentations'],
      content: [
        ['Prix', '670€',],
      ]
    },
    {
      headers: ['Stages'],
      content: [
        ['Semaine', '400€ + logement 50€',],
        ['Weekend', '150€',],
        ['Journée', '90€',],
        // ['Pack (3 stages weekend ou journée dans l\'année)', '90€',],
      ]
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
