import { Component, OnInit } from '@angular/core';

import { Chalkboard } from '../../models/chalkboard.model';
import { CafeService } from '../../services/cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage implements OnInit {

  public chalkboard: Chalkboard;
  public isLoading: boolean;
  public chalkboardError: boolean;

  public drinks = [
    {
      title: 'Nos Spécialités',
      categories: [
        {
          drinks: [
            {
              label: 'Nature',
              price: '2,50€ / 4,50'
            },
            {
              label: 'Lait',
              price: '2,90€ / 4,90'
            },
            {
              label: 'Thé Matcha',
              price: '4'
            },
            {
              label: 'Lait d’or végétal',
              price: '4'
            },
            {
              label: 'Thé glacé maison',
              price: '3,80'
            }
          ]
        }
      ]
    },
    {
      title: 'Café et Chocolat',
      categories: [
        {
          label: 'Les Classiques',
          drinks: [
            {
              label: 'Café BIO',
              price: '1,80'
            },
            {
              label: 'Café au Lait',
              price: '1,90'
            },
            {
              label: 'Décaféiné',
              price: '1,80'
            },
            {
              label: 'Café Double',
              price: '3,10'
            },
            {
              label: 'Café Parfumé',
              price: '1,90'
            },
            {
              label: 'Grand Crème',
              price: '3,70'
            },
            {
              label: 'Chocolat Chaud',
              price: '3,80'
            },
          ]
        },
        {
          label: 'Les Alternatifs',
          drinks: [
            {
              label: 'Café Glacé ',
              price: '2,20'
            },
            {
              label: 'Café Glacé Parfumé',
              price: '2,40'
            },
            {
              label: 'Café Chaï',
              price: '3,80'
            },
            {
              label: 'Café Choco',
              price: '3,50'
            }
          ]
        },
      ]
    },
    {
      title: 'Boissons',
      categories: [
        {
          label: 'Cocktails de fruits',
          drinks: [
            {
              label: 'Toucan ',
              price: '5'
            },
            {
              label: 'Coccinelle',
              price: '5'
            },
            {
              label: 'Abeille',
              price: '5'
            },
            {
              label: 'Caméléon',
              price: '5'
            }
          ]
        },
        {
          label: 'Milk-Shakes & Laits',
          drinks: [
            {
              label: 'Lait Mexicain',
              price: '5,50'
            },
            {
              label: 'Milk-Shake',
              price: '5,50'
            },
            {
              label: 'Lassis',
              price: '5'
            },
            {
              label: 'Lait Parfumé',
              price: '2,60'
            }
          ]
        },
        {
          label: 'Jus et Sirops',
          drinks: [
            {
              label: 'Jus d\'orange pressé',
              price: '4'
            },
            {
              label: 'Jus de Fruits',
              price: '3,2à'
            },
            {
              label: 'Sirops',
              price: '1,80'
            }
          ]
        },
      ]
    },
    {
      title: 'Bière et Vin',
      categories: [
        {
          drinks: [
            {
              label: 'Bière 25cl',
              price: '3'
            },
            {
              label: 'Bière Bio Locale Artisanale',
              price: '4,50'
            },
            {
              label: 'Vin Rouge Bio et Local',
              price: '3,50'
            }
          ]
        }
      ]
    },
  ]

  public readonly HEADER_TITLE = 'Le Café';
  public readonly TITLE = 'Notre Café Associatif';

  constructor(private cafeService: CafeService) { }

  ngOnInit() {
    this.isLoading = true;
    this._getChalkboard();
  }

  ////////////
  // PRIVATE
  ////////////
  private _getChalkboard(): void {
    this.cafeService.getChalkboardData()
      .subscribe(
        result => {
          this.isLoading = false;
          this.chalkboard = result.data[0];
        },
        error => {
          this.isLoading = false;
          this.chalkboardError = true;
        }
      )
  }

}
