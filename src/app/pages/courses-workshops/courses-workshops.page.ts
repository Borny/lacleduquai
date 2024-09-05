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
            { name: 'Atelier', value: 'Danse Contemporaine' },
            { name: 'Horaires', value: '18h30-20h30' },
            // { name: 'Niveau', value: 'Tout niveau' },
            // { name: 'Intervenant', value: 'Jérôme Chambon' },
            { name: 'Lieu', value: 'Studio 71 Bordeaux' },
          ],
        },
        {
          properties: [
            { name: 'Atelier', value: 'Composition instantanée / GIA' },
            { name: 'Horaires', value: '20h30-22h30' },
            // { name: 'Niveau', value: 'Tout niveau' },
            // { name: 'Intervenant', value: 'Jérôme Chambon' },
            { name: 'Lieu', value: 'Studio 71 - Bordeaux' },
          ],
        },
      ],
    },
    // {
    //   heading: 'Mercredi',
    //   activities: [
    //     {
    //       properties: [
    //         { name: 'Atelier', value: 'Danse contemporaine avancé' },
    //         { name: 'Horaires', value: '19h30-21h30' },
    //         { name: 'Lieu', value: 'Studio H25 - Bordeaux' },
    //       ],
    //     },
    //   ],
    // },
    {
      heading: 'Jeudi',
      activities: [
        {
          properties: [
            { name: 'Atelier', value: 'Danse contemporaine' },
            { name: 'Horaires', value: '19h-21h' },
            { name: 'Lieu', value: 'Sore - Landes' },
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
        '12-13 Octobre 2024',
        '2-3 Novembre 2024',
        '7-8 Décembre 2024',
        '25-26 Janvier 2025',
        '15-16 Février 2025',
        '8-9 Mars 2025',
        '29-30 Mars 2025',
        '12-13 Avril 2025',
      ]
    },
    {
      heading: 'Lieu',
      content: ['Sores - Landes']
    },
  ]

  public stages = [
    {
      headers: ['Evènement', 'Date', 'Horaire', 'Lieu'],
      content: [
        // ['Stages Eté 2024', '10-14 Juillet 2024', '10h - 17h', 'LalaLandes'],
        ['Le duo', '14-15 Décembre 2024', '10h - 18h', 'Bordeaux'],
        ['Le groupe : création et improvisation', '8-9 Février 2025', '10h - 18h', 'Bordeaux'],
        ['Occuper l\'espace', '10-11 Mai 2025', '10h - 18h', 'Sore - Landes'],
        ['Stage intensif de création', '7-12 Juillet 2025', '10h - 18h', 'Sore - Landes'],
      ]
    },
  ]

  public expressiv = [
    {
      headers: ['Date', 'Horaire', 'Lieu'],
      content: [
        ['Samedi 14 Décembre 2024', '20h - 22h', 'Bordeaux'],
        ['Samedi 8 Février 2025', '20h - 22h', 'Bordeaux'],
      ]
    },
  ]

  public tarifs = [
    {
      headers: ['Cours hebdomadaire Bordeaux'],
      content: [
        ['Quantité', '1', '2','3'],
        ['Prix', '430€', '770€ (-20%)', '1100€ (-20%)'],
        ['A la carte', '20€'],
      ]
    },
    {
      headers: ['Cours hebdomadaire Sore'],
      content: [
        // ['Enfants', '250€'],
        // ['Adultes', '350€'],
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
        ['Semaine', '350€ + logement 50€',],
        ['Weekend', '120€ + Logement 15€',],
        ['Journée', '75€',],
        // ['Pack (3 stages weekend ou journée dans l\'année)', '90€',],
      ]
    },
    {
      headers: ['Offre 3 stages (hors stage d\'une semaine et logement)'],
      content: [
        ['-20% sur le total'],
      ]
    },
    {
      headers: ['eXpressiv\''],
      content: [
        ['10€'],
      ]
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
