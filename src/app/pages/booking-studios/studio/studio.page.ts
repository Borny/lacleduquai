import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.page.html',
  styleUrls: ['./studio.page.scss'],
})
export class StudioPage implements OnInit {

  public readonly HEADER_TITLE = 'Studio - 50m2';
  public readonly TITLE = 'Notre Cave Créative';

  constructor() { }

  ngOnInit() {
  }

}
