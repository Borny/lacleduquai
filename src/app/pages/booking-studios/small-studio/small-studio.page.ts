import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-studio',
  templateUrl: './small-studio.page.html',
  styleUrls: ['./small-studio.page.scss'],
})
export class SmallStudioPage implements OnInit {

  public readonly HEADER_TITLE = 'Petite salle - 20m2';
  public readonly TITLE = 'Notre Salle Bien-être';

  constructor() { }

  ngOnInit() {
  }

}
