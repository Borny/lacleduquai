import { Component, OnInit } from '@angular/core';

import { Picture } from '../../models/gallery-picture.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public readonly HEADER_TITLE = 'Galerie';

  public pictures: Picture[] = [
    {
      src: './assets/img/gallery/bela-floor-smiling.jpg',
      label: 'Bela',
      highlight: false
    },
    {
      src: './assets/img/gallery/bela-shadow.jpg',
      label: 'Bela ombre',
      highlight: false
    },
    {
      src: './assets/img/gallery/chai-ingredients.jpg',
      label: 'Chai',
      highlight: false
    },
    {
      src: './assets/img/gallery/chai-pie.jpg',
      label: 'Chaï et tarte aux poires',
      highlight: false
    },
    {
      src: './assets/img/gallery/espace-zen.jpg',
      label: 'Espace zen',
      highlight: false
    },
    {
      src: './assets/img/gallery/et-rien-ne-bouge.jpg',
      label: 'Et Rien Ne Bouge',
      highlight: false
    },
    {
      src: './assets/img/gallery/globe.jpg',
      label: 'Globe',
      highlight: false
    },
    {
      src: './assets/img/gallery/indoor.jpg',
      label: 'Intérieur',
      highlight: false
    },
    {
      src: './assets/img/gallery/lutine-beer.jpg',
      label: 'Bière La Lutine',
      highlight: false
    },
    {
      src: './assets/img/gallery/muffins.jpg',
      label: 'Muffins',
      highlight: false
    },
    {
      src: './assets/img/gallery/mushroom-pie.jpg',
      label: 'Tarte aux champignons',
      highlight: false
    },
    {
      src: './assets/img/gallery/outside-drawing.jpg',
      label: 'Dessin',
      highlight: false
    },
    {
      src: './assets/img/gallery/pineapple-bela-drawing.jpg',
      label: 'Ananas',
      highlight: false
    },
    {
      src: './assets/img/gallery/smoothie.jpg',
      label: 'Smoothie',
      highlight: false
    },
    {
      src: './assets/img/gallery/soup.jpg',
      label: 'Soupe',
      highlight: false
    },
    {
      src: './assets/img/gallery/studio-color.jpg',
      label: 'Studio',
      highlight: false
    },
    {
      src: './assets/img/gallery/tartine.jpg',
      label: 'Tartine',
      highlight: false
    },
    {
      src: './assets/img/gallery/tea-butterfly.jpg',
      label: 'Thé',
      highlight: false
    },
    {
      src: './assets/img/gallery/tiny-flags.jpg',
      label: 'Drapeaux',
      highlight: false
    },
    {
      src: './assets/img/gallery/wrap.jpg',
      label: 'Wrap',
      highlight: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public onHightLightImg(index: number): void {
    if (this.pictures[index].highlight === true) {
      console.log('true')
      this.pictures[index].highlight = false;
    } else {
      console.log('false')
      this.pictures.forEach(pic => pic.highlight = false);
      this.pictures[index].highlight = true;
    }
  }

}
