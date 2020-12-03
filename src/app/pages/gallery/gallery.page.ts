import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public readonly HEADER_TITLE = 'Galerie';

  constructor() { }

  ngOnInit() {
  }

}
